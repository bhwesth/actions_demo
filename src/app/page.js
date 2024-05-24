"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef();
    const length = 4;

    useEffect(() => {
        startInterval();
        return stopInterval;
    }, []);

    useEffect(() => {
        console.log(intervalRef);
    }, [intervalRef]);

    function startInterval() {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setIndex((prevState) => {
                    return prevState === length - 1 ? 0 : prevState + 1;
                });
            }, 1000);
        }
    }

    function stopInterval() {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>{index}</p>
            <div
                onMouseLeave={startInterval}
                onMouseEnter={stopInterval}
                className="hover-box"
            >
                Hover here to stop interval
            </div>
        </main>
    );
}
