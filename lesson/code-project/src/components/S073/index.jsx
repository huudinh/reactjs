// Chạy hiệu ứng sau khi component được gắn kết

import {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log("Once after component mounted")
    }, []);
}


// Chạy hiệu ứng một lần sau khi component được gắn kết + một lần trước khi hủy gắn kết

import React, {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log("Once after component mounted")

        return () => {
            console.log("Once before component unmounted");
        }
    }, []);
}

// Chạy Effect sau mỗi lần hiển thị lại

import {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log("re-render");
        // After it mounted the first time 
        // and after every re-render
    });
}

// Chạy hiệu ứng trên các lần hiển thị lại cụ thể

import {useEffect, useState} from "react";

function App(props) {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        console.log("Only when first and/or props.user change.")
    }, [first, props.user]);
}




