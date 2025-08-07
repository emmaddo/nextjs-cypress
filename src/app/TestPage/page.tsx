"use client";
import React, { FC, useEffect } from "react";
import { useState } from "react";

const TestPage: FC = ()=> {
    const [count, setCount] = useState(0);
    const startCount = ()=> {
    setCount(PrevCount => PrevCount + 1);
    }
    return(
        <div className="flex flex-col items-center p-2 m-2 bg-gray-600">
            <div className="flex flex-col bg-white w-[250px] items-center justify-center">
                <p data-element="counter" className="flex text-blue-900 text-2xl p-2 justify-center">{count}</p>
                <button data-element="button" onClick={startCount} className="bg-blue-600 rounded text-2xl text-white p-2 m-2">Start Counting</button>
            </div>
        </div>
    );
}

export default TestPage;