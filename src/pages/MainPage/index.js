import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row"
import requests from "../../api/requests";

export default function Mainpage() {
    return (
        <div>
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                id="NO"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title="Trending Now"
                id="TN"
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title="Action Moives"
                id="AM"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                id="CM"
                fetchUrl={requests.fetchComedyMovies}
            />
        </div>
    );
}