import React, { useEffect, useState } from 'react'
import background from "./Background.css"

export default function Background({ offsetY, main }) {
    //Je to píčovina ale nemám na to čas to dělat líp a optimálněji
    return null
    const width = main.current.clientWidth
    const height = main.current.clientHeight
    useEffect(() => {
        setPageDimensions({
            width: main.current.clientWidth,
            height: main.current.clientHeight
        })
    }, [])
    const [page, setPageDimensions] = useState({
        width: main.current.clientWidth,
        height: main.current.clientHeight
    })

    function Circle(props) {
        //Optimalizace ať neshoří úplně všechno xd
        if (props.cy + props.r < offsetY || window.innerHeight + offsetY < props.cy - props.r)
            return null

        return <circle {...props} />
    }


    return (
        <div className='background'>
            <svg xmlns="http://www.w3.org/2000/svg" width={page.width} height={page.height} viewBox={`0 0 ${page.width} ${page.height}`}>
                <g id="Group_5" data-name="Group 5">
                    <Circle className="background__object" key="Ellipse_1" cx={page.width / 4} cy={360} r={360} fill="#ff4040" />
                    <Circle className="background__object" key="Ellipse_2" cx={page.width} cy={page.height / 4} r={360} fill="#4073ff" />
                    <Circle className="background__object" key="Ellipse_3" cx={page.width / 5} cy={page.height} r={1000} fill="#ff7440" />
                    <Circle className="background__object" key="Ellipse_4" cx={page.width / 5} cy={page.height / 3} r={200} fill="#ff7440" />
                </g>
            </svg>

        </div>
    )
}
