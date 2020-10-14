import { div } from 'prelude-ls'
import React from 'react'
import ThreeLayOut from "./components/common/ThreeLayOut"
export default function App() {
  return (
    <div>
            <ThreeLayOut
                gap={50}
                left ={<div
                    style={{
                        border:"2px solid #008c8c"
                    }}
                >
                    hello world 左边栏
                </div>}
                  right ={<div
                    style={{
                        border:"2px solid #008c8c"
                    }}
                >
                    hello world 右边栏
                </div>}
            >
                <div style={{
                    border:"2px solid #f40"
                }}>
                    主区域：Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsum?
                </div>
            </ThreeLayOut>
    </div>
  )
}
