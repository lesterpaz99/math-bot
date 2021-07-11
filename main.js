/*
  SHAPES
*/
import {
	calculateSquarePerimeter,
	calculateSquareArea,
	calculateTrianglePerimeter,
	calculateTriangleArea,
	calculateCirclePerimeter,
	calculateCircleArea,
} from './modules/shapes.mjs';

// INTERACTION WITH HTML

//SQUARE
const squarePerimeterBtn = document.getElementById('squarePerimeterBtn');
squarePerimeterBtn.addEventListener('click', calculateSquarePerimeter);

const squareAreaBtn = document.getElementById('squareAreaBtn');
squareAreaBtn.addEventListener('click', calculateSquareArea);

// TRIANGLE
const trianglePerimeterBtn = document.getElementById('trianglePerimeterBtn');
trianglePerimeterBtn.addEventListener('click', calculateTrianglePerimeter);

const triangleAreaBtn = document.getElementById('triangleAreaBtn');
triangleAreaBtn.addEventListener('click', calculateTriangleArea);

// CIRCLE
const circlePerimeterBtn = document.getElementById('circlePerimeterBtn');
circlePerimeterBtn.addEventListener('click', calculateCirclePerimeter);

const circleAreaBtn = document.getElementById('circleAreaBtn');
circleAreaBtn.addEventListener('click', calculateCircleArea);
