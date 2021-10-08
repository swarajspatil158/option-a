import React from 'react';

export default function Output() {
var op = JSON.parse(localStorage.getItem("allData"));
    return (
    <div className="block mx-auto my-auto md:m-auto xl:m-auto w-11/12 px-4 md:w-1/2 xl:w-1/4 md:px-8 xl:px-8 bg-black-300 py-20">
    {op.map((ele, it) => {
                return (
                    <div key={it} className="text-center">
                        <span className="font-bold">Name: </span>
                        <span className="font-mono">{ele.name}</span>
                        <br/>
                        <span className="font-bold">Desi: </span>
                        <span className="font-mono">{ele.desi}</span>
                        <br/>
                        <span className="font-bold">Language: </span>
                        <span className="font-mono">{ele.lang}</span>
                    </div>
                )
            })}
    </div>
    )
}