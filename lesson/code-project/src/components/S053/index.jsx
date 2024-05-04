import {useState} from "react";

function Blog() {
    const [settings, setSettings] = useState({
        title: "Blog",
        theme: "dark"
    });

    return <ul>{
        Object.entries(settings).map(item => {
            return (
                <li key={item[0]}>
                    {item[0]} with value {item[1]}
                </li>
            )
        })
    }</ul>;
}

export default Blog;

// JSX kết quả sẽ là:
<ul>
    <li key="title">title with value Blog</li>
    <li key="theme">theme with value dark</li>
</ul>

// Object.entries(settings) trả về mảng sau:
[
    ["title", "Blog"],
    ["theme", "dark"],
]


