import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experiment 06 - Crafted.is",
    description: "A crafted experience for the modern web.",
};

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>{children}</>
    )
}

export default Layout