function calculateTriangleArea() {
    const triangleBaseValue = document.getElementById('baseValue');
    // console.log(triangleBaseValue.value)
    const baseValue = triangleBaseValue.value;
    const base = parseFloat(baseValue);
    // console.log(base)

    const triangleHeight = document.getElementById('triangel-height');
    const heightValue = triangleHeight.value;
    const height = parseFloat(heightValue);
    // console.log(height)

    const area = 0.5 * base * height;
    // console.log(area)

    const showingText = document.getElementById('showArea');
    showingText.innerText = area;
}

function calculateRectangleArea() {

    const wValue = document.getElementById('wValue');
    const wTextValue = wValue.value;
    const wNumberValue = parseFloat(wTextValue);

    const iValue = document.getElementById('iValue');
    const iInputValue = iValue.value;
    const iNumberValue = parseFloat(iInputValue);

    // console.log('w value:', wNumberValue, 'i value:', iNumberValue)
    const calculateArea = wNumberValue * iNumberValue;
    const showingText = document.getElementById('showRectangleArea');
    showingText.innerText = calculateArea;
}