import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Sunny (Sunil)</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Meachtronics Engineer uWaterloo</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Hi there, my name is Sunil (aka Sunny). I'm a student at the University of Waterloo 
                in my first year of mechatronics engineering. Previously, I completed two years 
                in biomedical sciences at uOttawa but I chose to take a leap and pursure my passion 
                in tech. 
                <br/>
                I am interested in working more with ML, embedded sytems and real time systems. 
                
            </p>
        </div>
    )
}

export default Intro;