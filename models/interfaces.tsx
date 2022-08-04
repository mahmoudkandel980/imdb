// export interface NavbarFrameInterface {
//     children: JSX.Element[] | JSX.Element;
// }

export interface NavElInterface {
    href: string;
    icon: JSX.Element;
    navEl: string;
}

export interface RequestMediaInterface {
    type: string;
    mediaType: string;
}

export interface PaginationButtons {
    icon: JSX.Element;
    target: string;
}

export interface TotalPagesInterface {
    total_pages: number;
}
