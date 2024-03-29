export const get = {
	div: getDiv,
	button: getButton,
	canvas: getCanvas,
	input: getInput,
	el: getEl,
}
export const canvas = {
	getContext2d: getCanvasContext,
	fitToParent: {
		BCR: CanvasFitToParentBCR,
		ClientWH: CanvasFitToParentClientWH,
	},
	drawGrid: drawGridOnCanvas,
	drawCoords: drawMouseCoordsOnCanvas,
}
export const intersection = {
	rectPoint: rectPointIntersect,
	rects: rectIntersect,
	circlePoint: circlePointIntersect,
	circles: circlesIntersect,
}
export const random = {
	int: randomInt,
	boolean: random_boolean,
	asbOrNot: random_asbOrNot,
	shuffle: shuffle,
	choose: chooseRandom,
}
export const other = {
	openTextFile,
	dateNow,
	wait
}




//get
export function getButton(id: string)
{
	const el = document.getElementById(id);
	if (el == null) throw new Error(`${id} not found`);
	if (el instanceof HTMLButtonElement) return el;
	throw new Error(`${id} element not Button`);
}
export function getDiv(id: string)
{
	const el = document.getElementById(id);
	if (el == null) throw new Error(`${id} not found`);
	if (el instanceof HTMLDivElement) return el;
	throw new Error(`${id} element not Div`);
}
export function getCanvas(id: string)
{
	const el = document.getElementById(id);
	if (el == null) throw new Error(`${id} not found`);
	if (el instanceof HTMLCanvasElement) return el;
	throw new Error(`${id} element not Canvas`);
}
export function getInput(id: string)
{
	const el = document.getElementById(id);
	if (el == null) throw new Error(`${id} not found`);
	if (el instanceof HTMLInputElement) return el;
	throw new Error(`${id} element not Input`);
}
export function getEl<T extends typeof HTMLElement>(id: string, type: T)
{
	const el = document.getElementById(id);
	if (el == null) throw new Error(`${id} not found`);
	if (el instanceof type) return el as InstanceType<T>;
	throw new Error(`${id} element not Input`);
}



//canvas
export function getCanvasContext(canvas: HTMLCanvasElement)
{
	const ctx = canvas.getContext("2d");
	if (ctx == null) throw new Error(`Context is null`);
	return ctx;
}
export function CanvasFitToParentBCR(canvas: HTMLCanvasElement)
{
	const parent = canvas.parentElement;
	if (parent == null) throw new Error("Canvas parent not found");
	const bcr = parent.getBoundingClientRect();
	const w = bcr.width;
	const h = bcr.height;
	canvas.width = w;
	canvas.style.width = `${w}px`;
	canvas.height = h;
	canvas.style.height = `${h}px`;
}
export function CanvasFitToParentClientWH(canvas: HTMLCanvasElement)
{
	const parent = canvas.parentElement;
	if (parent == null) throw new Error("Canvas parent not found");
	const w = parent.clientWidth;
	const h = parent.clientHeight;
	canvas.width = w;
	canvas.style.width = `${w}px`;
	canvas.height = h;
	canvas.style.height = `${h}px`;
}
export function drawGridOnCanvas(ctx: CanvasRenderingContext2D, cellSize: number, color = "black")
{
	const canvasWidth = ctx.canvas.width;
	const canvasHeight = ctx.canvas.height;

	ctx.save();
	ctx.strokeStyle = color;
	ctx.lineWidth = 2;
	ctx.beginPath();
	for (let x = cellSize; x < canvasWidth; x += cellSize)
	{
		ctx.moveTo(x, 0);
		ctx.lineTo(x, canvasHeight);
	}
	for (let y = cellSize; y < canvasWidth; y += cellSize)
	{
		ctx.moveTo(0, y);
		ctx.lineTo(canvasWidth, y);
	}
	ctx.stroke();
	ctx.restore();
}
export function drawMouseCoordsOnCanvas(ctx: CanvasRenderingContext2D, x: number, y: number)
{
	const space = 2;
	const width = ctx.canvas.width;
	const height = ctx.canvas.height;

	ctx.save();
	ctx.strokeStyle = "black";
	ctx.beginPath();

	ctx.moveTo(0, y);
	ctx.lineTo(x - space, y);

	ctx.moveTo(x + space, y);
	ctx.lineTo(width, y);

	ctx.moveTo(x, 0);
	ctx.lineTo(x, y - space);

	ctx.moveTo(x, y + space);
	ctx.lineTo(x, height);

	ctx.stroke();

	ctx.font = "12px Arial";
	ctx.fillStyle = "black";
	const text = `x: ${x}, y: ${y}`;
	ctx.fillText(text, width - ctx.measureText(text).width - 2, height - 3);
	ctx.restore();
}


//intersection
export function circlePointIntersect(circle: ICircle, point: IPoint)
{
	return circle.r * circle.r >= (circle.x - point.x) * (circle.x - point.x) + (circle.y - point.y) * (circle.y - point.y);
}
export function rectPointIntersect(rect: IRect, point: IPoint)
{
	normalizeRect(rect);
	return (
		rect.x + rect.width >= point.x &&
		point.x >= rect.x &&
		rect.y + rect.height >= point.y &&
		point.y >= rect.y
	);
}
export function circlesIntersect(circle1: ICircle, circle2: ICircle)
{
	const dx = circle1.x - circle2.x;
	const dy = circle1.y - circle2.y;

	return square(dx) + square(dy) < square(circle1.r + circle2.r);
}
export function rectIntersect(rect1: IRect, rect2: IRect)
{
	normalizeRect(rect1);
	normalizeRect(rect2);
	return (
		rect1.x + rect1.width >= rect2.x &&
		rect2.x + rect2.width >= rect1.x &&
		rect1.y + rect1.height >= rect2.y &&
		rect2.y + rect2.height >= rect1.y
	);
}
export function normalizeRect(rect: IRect)
{
	if (rect.width < 0)
	{
		rect.x += rect.width;
		rect.width = Math.abs(rect.width);
	}
	if (rect.height < 0)
	{
		rect.y += rect.height;
		rect.height = Math.abs(rect.height);
	}
}



//random
export function random_asbOrNot(num: number)
{
	return Math.random() < 0.5 ? num : -num;
}

export function random_boolean()
{
	return Math.random() < 0.5;
}

export function randomInt(max: number): number;
export function randomInt(min: number, max: number): number;
export function randomInt(maxmin: number, max?: number)
{
	if (max != undefined)
		return Math.floor(Math.random() * (maxmin - max)) + max;
	return Math.floor(Math.random() * maxmin);
}
export function shuffle<T>(array: T[])
{
	return array.sort(() => 0.5 - Math.random());
}
export function chooseRandom<T>(array: T[])
{
	return array[randomInt(array.length)];
}



//other
export function square(num: number)
{
	return num * num;
}
export function loadScript(scriptPath: string)
{
	const el = document.createElement("script");
	el.src = scriptPath;
	document.head.appendChild(el);
}
export function addButtonListener(id: string, f: (e: MouseEvent) => void)
{
	const button = getButton(id);
	button.addEventListener("click", f);
}
export function capitalize(text: string)
{
	return text.slice(0, 1).toUpperCase() + text.slice(1);
}
export function copyText(text: string)
{
	const el = document.createElement('textarea');
	el.value = text;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	el.style.opacity = '0';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}
export function downloadFile(filename: string, text: string)
{
	var el = document.createElement('a');
	el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	el.setAttribute('download', filename);

	el.style.display = 'none';
	document.body.appendChild(el);

	el.click();

	document.body.removeChild(el);
}


export interface IRect
{
	x: number,
	y: number,
	width: number,
	height: number
}

export interface IPoint
{
	x: number,
	y: number,
}

export interface ICircle
{
	x: number,
	y: number,
	r: number,
}


export function SetContent(parent: HTMLElement, children: ElChildren)
{
	parent.innerHTML = "";
	AppendContent(parent, children);
}
export function AppendContent(parent: HTMLElement, children: ElChildren)
{
	if (children instanceof Array)
		children.forEach(ch => parent.append(ch));
	else
		parent.append(children);
}

export function Div(classes?: ElClasses, children?: ElChildren)
{
	return initEl("div", classes, children);
}
export function Span(classes?: ElClasses, children?: ElChildren)
{
	return initEl("span", classes, children);
}
export function H1(classes?: ElClasses, children?: ElChildren)
{
	return initEl("h1", classes, children);
}
export function Table(classes?: ElClasses, children?: ElChildren)
{
	return initEl("table", classes, children);
}
export function TR(classes?: ElClasses, children?: ElChildren)
{
	return initEl("tr", classes, children);
}
export function TD(classes?: ElClasses, children?: ElChildren)
{
	return initEl("td", classes, children);
}
export function Input(classes?: ElClasses, type?: string, placeholder?: string)
{
	const input = initEl("input", classes, undefined);
	if (type) input.type = type;
	if (placeholder) input.placeholder = placeholder;
	return input;
}
export function Button(classes?: ElClasses, children?: ElChildren, clickListener?: (btn: HTMLButtonElement) => void)
{
	const button = initEl("button", classes, children);
	if (clickListener) button.addEventListener("click", clickListener.bind(button, button));
	return button;
}

type ElClass = string | undefined | null | false;
export type ElClasses = ElClass[] | ElClass;
export type ElChildren = Node | string | (Node | string)[];
export function initEl<K extends keyof HTMLElementTagNameMap>(tagName: K, classes?: ElClasses, children?: ElChildren)
{
	const el = document.createElement(tagName);
	if (classes)
	{
		if (typeof classes == "string") el.classList.add(classes);
		else classes.forEach(cs => cs && el.classList.add(cs));
	}
	if (children)
	{
		if (children instanceof Array)
			children.forEach(ch => el.append(ch));
		else
			el.append(children);
	}

	return el;
}

export function createSvgEl<K extends keyof SVGElementTagNameMap>(qualifiedName: K, parent?: Node): SVGElementTagNameMap[K]
{
	const el = document.createElementNS("http://www.w3.org/2000/svg", qualifiedName);
	if (parent)
		parent.appendChild(el);
	return el;
}


export async function wait(t: number)
{
	return new Promise(res => setTimeout(res, t));
}

export function lerp(v1: number, v2: number, t: number)
{
	return (v2 - v1) * t + v1;
}

export function dateNow(split = ".")
{
	const date = new Date();
	return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join(split);
}

export function openTextFile(accept = "*")
{
	return new Promise<string>((resolve, reject) =>
	{
		const input = document.createElement("input");
		input.type = "file";
		input.accept = accept;

		input.onchange = () =>
		{
			if (!input.files)
			{
				reject()
				return;
			}
			const file = input.files[0];

			const reader = new FileReader();
			reader.readAsText(file, "UTF-8");
			reader.onload = readerEvent =>
			{
				if (!readerEvent.target)
				{
					reject()
					return;
				}
				const content = readerEvent.target.result;
				resolve(content as string);
			}
			reader.onerror = reject;
		}

		input.click();
	})
}
