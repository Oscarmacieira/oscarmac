import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export default function PDFViewer({ pdf }) {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	const pages = [...Array(numPages)].map((e, i) => (
		<Page className={"doc"} width={window.innerWidth} key={i} pageNumber={i} />
	));

	return (
		<div>
			<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
				{pages}
			</Document>
		</div>
	);
}
