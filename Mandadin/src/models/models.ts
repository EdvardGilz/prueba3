export class ProductoModel {
	categoria: string;
	visible: boolean;
	productos: Array<ProductoDataModel>;
    sumatoria: number;
}

export class ProductoDataModel {
	nombre: string;
	activo: boolean;
	precio: string;
	fecha: string;
	eliminar: boolean;
}