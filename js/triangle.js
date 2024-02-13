function calculateTriangleArea(){
    const triangleBaseInput =document.getElementById('triangle-base')
    const triangleBaseText =triangleBaseInput.value
    const base =parseFloat(triangleBaseText)
    

    const triangleHightInput =document.getElementById('triangle-hight')
    const triangleHightText =triangleHightInput.value
    const hight=parseFloat(triangleHightText)
    const area =0.5*base*hight

    const result =document.getElementById('result')
    result.innerText=area
}


function calculateRectangleArea(){
    const rectangleWInput =document.getElementById('rectangle-w')
    const rectangleWText = rectangleWInput.value
    const width =parseFloat(rectangleWText)

    const rectanglelInput =document.getElementById('rectangle-l')
    const rectanglelText =rectanglelInput.value
    const lenth =parseFloat(rectanglelText)
    const area=width*lenth

    const Rresult =document.getElementById('Rresult')
    Rresult.innerText=area
}