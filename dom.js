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