import { canvasRenderCollection } from './fixtures';

interface ICanvasRenderProps {
	ctx: CanvasRenderingContext2D;
	renderFunctionId: string;
}

export const canvasRender = (props: ICanvasRenderProps): string => {
	const { ctx, renderFunctionId } = props;

	if (ctx && canvasRenderCollection[renderFunctionId]) {
		return canvasRenderCollection[renderFunctionId](ctx);
	}
};
