import React from 'react'
import logo from './logo.png';
import axios from 'axios'

function Covid() {
    const [data, setData] = React.useState({});

    React.useEffect(()=>{
        async function fetchData() {
            const response = await axios.get('https://corona.lmao.ninja/v2/countries/gh',);
            setData(response.data)
        }
        fetchData();
    }, []);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" class="img" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            {/* end of navbar */}

            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-6 mt-2">
                        <div class="card shadow p-2 bg-white rounded" >
                            <p class="font"> Country <i class="fa fa-caret-down fa-2x ml-2 p-0 tc" aria-hidden="true"></i></p>
                            <div class="card-body">
                                <p class="card-text figures">
                                {data.country}
                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-6 mt-2">
                        <div class="card shadow p-2 bg-white rounded" >
                            <p class="font"> Recoveries <i class="fa fa-caret-up fa-2x ml-2 p-0 rc" aria-hidden="true"></i></p>
                            <div class="card-body">
                                <p class="card-text figures">
                                {data.recovered}
                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-6 mt-2">
                        <div class="card shadow p-2 bg-white rounded" >
                            <p class="font"> Active Cases <i class="fa fa-caret-down fa-2x ml-2 p-0 ac" aria-hidden="true"></i></p>
                            <div class="card-body">
                                <p class="card-text figures">
                                    {data.cases}
                    </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-6 mt-2">
                        <div class="card shadow p-2 bg-white rounded" >
                            <p class="font">Total Deaths  <i class="fa fa-caret-down fa-2x ml-2 p-0 td" aria-hidden="true"></i></p>
                            <div class="card-body">
                                <p class="card-text figures">
                                {data.deaths}
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Tiles */}

            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-8">
                        <table class="table table-striped">
                            <thead class="thead-light">
                                <tr class="font">
                                    <th scope="col">Countries</th>
                                    <th scope="col">Active Cases</th>
                                    <th scope="col">Recovered</th>
                                    <th scope="col">Total Deaths</th>
                                    {/* <th scope="col">Total Cases</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{data.country} </th>
                                    <td>{data.cases}</td>
                                    <td>{data.recovered} </td>
                                    <td> {data.deaths}</td>
                                    {/* <td></td> */}
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card shadow p-2 bg-white rounded" >
                                    <span class="badge badge-theme font mx-auto"><p class="my-auto">Health Tips</p></span>
                                    <div class="card-body">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Cover your nose when sneezing</li>
                                            <li class="list-group-item">Wash your hands regularly</li>
                                            <li class="list-group-item">Avoid group gathering</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Covid
