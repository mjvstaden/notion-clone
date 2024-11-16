'use client'

import Document from "@/components/Document";
import { useState, useEffect } from 'react';

type DocumentPageProps = {
  params: {
    id: string;
  };
};

function DocumentPage({ params }: DocumentPageProps) {
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        // Mimic unwrapping `params` as if it's asynchronous
        const fetchParams = async () => {
        const resolvedParams = await params;
        setId(resolvedParams.id);
        };

        fetchParams();
    }, [params]);

    if (!id) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <Document id={id} />
        </div>
    )
}
export default DocumentPage