/// <reference types="node" />

declare class WordExtractor {
    extract(documentPath: string | Buffer): Promise<WordExtractor.Document>;
}

export = WordExtractor;

declare namespace WordExtractor {
    class Document {
        getBody(): string;
        getFootnotes(): string;
        getHeaders(options?: { includeFooters?: boolean | undefined }): string;
        getFooters(): string;
        getAnnotations(): string;
        getTextboxes(
            options?: { includeHeadersAndFooters?: boolean | undefined; includeBody?: boolean | undefined },
        ): string;
        getEndnotes(): string;
    }
}
