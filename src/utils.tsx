export type FormValues = {
    itemsList: {
      descripcion: string;
      cantidad: number | null;
      precio: number | null;
    }[];
    comprobante: string;
    presupuesto: string;
    fecha: any;
    cliente: string;
    domicilio: string;
    vendedor: string;
    contacto: string;
    IVA: string;
    expediente: string;
    condVenta: string;
  };
  
  export const defaultDataCliente: Record<string, { domicilio: string }> = {
    "DIRECCION DE MATERIALES Y CONSTRUCCIONES ESCOLARES": {
      domicilio: "DIEGO DE VILLAROEL 339",
    },
    Policia: {
      domicilio: "Calle Falsa 1234",
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
  