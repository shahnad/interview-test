import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { instance } from "../../../utils/api"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountriesBegins, fetchCountriesFails, fetchCountriesSuccess } from '../../../features/countries/countrySlice'
import { toast } from 'react-toastify'
import { collectDataFromRange, getStartAndEndIndex, getUniqueDatas } from '../../../utils/common'
import "./index.scss"

const Countries = () => {
    let [searchparams] = useSearchParams();
    const activeQuery = searchparams?.get('continent');
    const [counter, setcounter] = useState(0)
    const { countries = [] } = useSelector(state => state?.countries) || { countries: [] }

    const [countryList, setCountryList] = useState([]);

    const dispatch = useDispatch();

    const getCountryLists = async ({ type }) => {
        const types = {
            'all': "/all",
            'asia': `/region/${type}`,
            'europe': `/region/${type}`,
        }
        try {
            dispatch(fetchCountriesBegins())
            const { data = [] } = await instance.get(`${types[type]}?fields=name,region,flag`)
            dispatch(fetchCountriesSuccess(data))
        } catch (error) {
            toast.error(error?.response?.message);
            dispatch(fetchCountriesFails())
        }
    }

    useEffect(() => {
        setCountryList([])
        getCountryLists({ type: activeQuery })
        //eslint-disable-next-line
    }, [activeQuery])

    useEffect(() => {
        const { start = 0, end = 10 } = getStartAndEndIndex(counter);
        const list = collectDataFromRange(countries, start, end);
        setCountryList(getUniqueDatas([...countryList, ...list], 'name'))
        //eslint-disable-next-line
    }, [counter, countries])


    return (
        <>
            <Container fluid="xs" className='my-5 countries-comntainer'>
                <Row  >
                    {!!countryList?.length && countryList?.map(country => <Country key={country?.name} {...country} />)}
                </Row>
                <Row>
                    <Button color="primary" onClick={() => setcounter(counter + 1)} className='load-more-btn mx-auto my -5'> Load More</Button>
                </Row>
            </Container>
        </>
    )
}

const Country = ({ name, flag, region }) => {
    return (<Col xs={12} fluid sm={12} md={6} className='p-0 m-0' >
        <div className='p-1'>
            <div className='border border-2 border-tertiary p-2'>
                <div className='d-flex flex-row gap-4'>
                    <Image style={{ maxHeight: 96, maxWidth: 145 }} src={flag} />
                    <div className='p-2'>
                        <h4 className="text-tertiary fw-bolder">{name}</h4>
                        <p>{region}</p>
                    </div>
                </div>
            </div>
        </div>
    </Col>)
}

export default Countries