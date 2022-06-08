import React, { useEffect, useState } from 'react'
import Travel from '../components/Travel'
import { useNavigate, useLocation } from "react-router-dom";
import * as API from "../utils/apis";
import { Container } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate();
  const search = useLocation().search;
  const keywordSearch = new URLSearchParams(search).get("search");

  const initialForm = {
    search: keywordSearch
  }
  const [form, setForm] = useState(initialForm);
  
  const [listTrip, setListTrip] = useState([]);

  useEffect(() => {
    getTripTh();
  }, [form.search]);

  const getTripTh = async () => {
    let params = {
      keywords: form.search
    }

    try {
      const response = await API.getTripTh(params);
      const data = await response?.data;
      if (response.status === 200) {
        setListTrip(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mt-4">
      <p className="home-body text-blue-wongnai">เที่ยวไหนดี</p>
      <div className="d-flex justify-content-center md-form active-cyan active-cyan-2 mb-3">
        <input className="form-control text-search" value={form.search} id="search" type="text" placeholder="หาที่เที่ยวแล้วไปกัน...." aria-label="Search"
          onChange={(e) => {
            setForm({ ...form, search: e.target.value })
            navigate(`/?search=${e.target.value}`)
          }}
        />
      </div>

      <div className="d-flex justify-content-center">
        <Container className="w-50">
          {listTrip && listTrip.length > 0 ?
            listTrip.map((item, i) => {
              return (
                <Travel key={i} getTrip={item} searchText={(tags) => {
                  setForm({ ...form, search: tags })
                  navigate(`/?search=${tags}`)
                }}/>
              )
            })
            :
            <p className="text-blue-wongnai d-flex justify-content-center">ไม่มีข้อมูล</p>
          }
        </Container>
      </div>

    </div>
  )
}

export default Home