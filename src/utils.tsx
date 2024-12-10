export type FormValues = {
  itemsList: {
    descripcion: string;
    cantidad: number | null;
    precio: number | null;
    item: string;
  }[];
  comprobante: string;
  presupuesto: string;
  fecha: any;
  cliente: string;
  domicilio: string;
  vendedor: string;
  contacto: string;
  IVAcondicion: string;
  expediente: string;
  condVenta: string;
  IVAnumero: number | null;
  ingBruto: number | null;
  TEM: number | null;
  PyP: number | null;
  addsign: boolean;
};

export const defaultDataCliente: Record<string, { domicilio: string }> = {
  "DIRECCION DE MATERIALES Y CONSTRUCCIONES ESCOLARES": {
    domicilio: "DIEGO DE VILLAROEL 339",
  },
  "DEPTO GRAL DE POLICIA": {
    domicilio: "ITALIA 2601",
  },
};

export const defaultDataVendedor: Record<string, { contacto: string }> = {
  "PALACIO EZEQUIEL": {
    contacto: "381-5116763",
  },
  "DIP RAMIRO": {
    contacto: "381-4791893",
  },
};

export function getTotal(payload: FormValues["itemsList"]) {
  let total = 0;

  for (const item of payload) {
    if (item.precio && item.cantidad) {
      total = total + +item.precio * +item.cantidad;
    }
  }

  return total.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
