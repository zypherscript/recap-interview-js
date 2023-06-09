import { useState } from 'react'

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const sassItems = [
        `Variables: The $primary-color variable is defined to store the color value #ff0000, allowing for easy reusability and consistent updates.`,
        `Nesting: Selectors are nested within their parent selectors, enhancing readability and reducing repetition.`,
        `Partials and imports: The code is modularized using partials, where the button styles are defined in _buttons.scss and imported into the main styles.scss file.`,
        `Mixins: Although not used in this specific example, Sass allows you to define mixins that can include reusable blocks of styles.`,
        `Functions: The darken() function is used to generate a slightly darker shade of the $primary-color when the button is hovered over.`,
        `Inheritance: In this example, inheritance is not explicitly shown, but Sass provides the @extend directive to inherit styles from one selector to another.`
    ];

    return (
        <>
            <Panel
                title="CSS (Cascading Style Sheets)"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                CSS is the standard style sheet language used on the web. It is a simple, straightforward language that provides basic styling capabilities. CSS allows you to define rules that specify how elements should be displayed, such as colors, fonts, layout, and animations. It uses a selector-based syntax to target HTML elements and apply styles to them.
            </Panel>
            <Panel
                title="Sass (Syntactically Awesome Style Sheets)"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                Sass, on the other hand, is an extension of CSS that introduces additional features and capabilities. Sass is a preprocessor, which means it must be compiled into CSS before it can be used in a web page. It provides a more advanced and powerful syntax compared to plain CSS.
                <ul className="list-inside list-disc text-left mt-4 leading-relaxed text-base">
                    {sassItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Panel>
        </>
    );
}

function Panel({
    title,
    children,
    isActive,
    onShow
}) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mb-8 mx-auto">
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-4 mb-4 border-gray-200 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="sm:w-16 sm:h-16 w-10 h-10"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                            {title}
                        </h2>
                        {isActive ? (
                            // <p className="leading-relaxed text-base">{children}</p>
                            <>
                                {children}
                            </>
                        ) : (
                            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer" onClick={onShow}>
                                Show
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Accordion;