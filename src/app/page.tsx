"use client"

import "flowbite";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Fitur from "./components/Fitur";
import Content from "./components/Content";

export default function DashboardPage(){
    return (
    <div>
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <Content></Content>
        <Fitur></Fitur>
        <div className="flex justify-center py-5 bg-gray-200 relative bg-repeat bg-center"
    style={{
        backgroundImage: 'url("/woke.jpg")',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparansi 50%
        backgroundBlendMode: 'overlay',
    }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl gap-4 mx-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
        </div>
        <Footer></Footer>
    </div>
    )
}