"use client";

import { useRef } from "react";

export default function Form({ submit }) {
    // Enten brug ref for at reset form, eller brug useState til value state binding
    const ref = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        submit(new FormData(event.target));
        ref.current?.reset();
    }

    return (
        // <form action={submit}> Normal "actions" SSR mønster
        <form onSubmit={handleSubmit} ref={ref}>
            <label>
                Login
                <input name="login" type="text" />
            </label>
        </form>
    );
}
