type TypographyProps = {
    children: React.ReactNode;
    light?: boolean;
};

export const H1 = ({ children, light }: TypographyProps) => {
    return (
        <h1 className={`
            text-9xl // Size of the text
            text-left // Alignment of the text
            font-extrabold // Weight of the font
            ${light ? 'text-slate-300' : 'text-black'} // Text color based on the 'light' prop
            tracking-widest // Increases the letter spacing for better readability
            subpixel-antialiased // Improves the rendering of fonts on LCD screens
            `}>
            {children}
        </h1>
    );
}


export const H2 = ({ children, light }: TypographyProps) => {
    return (
        <h2 className={`text-4xl text-left font-semibold ${light ? 'text-slate-300' : 'text-black'} tracking-wide mb-4 leading-snug`}>{children}</h2>
    );
}

export const H3 = ({ children, light }: TypographyProps) => {
    return (
        <h3 className={`text-3xl text-left font-semibold ${light ? 'text-slate-300' : 'text-black'} tracking-normal mb-3 leading-snug`}>{children}</h3>
    );
}

export const H4 = ({ children, light }: TypographyProps) => {
    return (
        <h4 className={`text-2xl text-left font-medium ${light ? 'text-slate-300' : 'text-black'} tracking-normal mb-2 leading-snug`}>{children}</h4>
    );
}

export const H5 = ({ children, light }: TypographyProps) => {
    return (
        <h5 className={`text-xl text-left font-medium ${light ? 'text-slate-300' : 'text-black'} tracking-normal mb-2 leading-snug`}>{children}</h5>
    );
}

export const H6 = ({ children, light }: TypographyProps) => {
    return (
        <h6 className={`text-lg text-left font-medium ${light ? 'text-slate-300' : 'text-black'} tracking-normal mb-2 leading-snug`}>{children}</h6>
    );
}

export const P = ({ children, light }: TypographyProps) => {
    return (
        <p className={`text-base text-left font-normal ${light ? 'text-slate-300' : 'text-black'} tracking-normal mb-4 leading-relaxed`}>{children}</p>
    );
}

export const Caption = ({ children, light }: TypographyProps) => {
    return (
        <p className={`text-sm text-left font-light ${light ? 'text-slate-300' : 'text-black'} tracking-wide mb-3 leading-relaxed`}>{children}</p>
    );
}

export const Hyperlink = ({ children, light }: TypographyProps) => {
    return (
        <a className={`text-normal text-left font-normal underline ${light ? 'text-slate-300' : 'text-black'} tracking-normal mb-4 hover:text-opacity-75`}>{children}</a>
    );
}
