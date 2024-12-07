import { Button } from "@nextui-org/button";
import { PDFViewer } from "@react-pdf/renderer";
import { Control, useFieldArray, useForm, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/default";
import { subtitle } from "@/components/primitives";
import Logo from "../../public/logo-portal.png";
import PDF from "@/components/PDF";
import { defaultDataCliente, defaultDataVendedor, FormValues } from "@/utils";

function getTotal(payload: FormValues["itemsList"]) {
  let total = 0;

  for (const item of payload) {
    if (item.precio && item.cantidad) {
      total = total + +item.precio * +item.cantidad;
    }
  }

  return total.toLocaleString("es-ES");
}

function TotalAmout({ control }: { control: Control<FormValues> }) {
  const cartValues = useWatch({
    control,
    name: "itemsList",
  });

  return <span>Monto total: ${getTotal(cartValues)}</span>;
}

export default function IndexPage() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Mes empieza en 0
  const day = String(today.getDate()).padStart(2, "0");
  const { register, watch, control, reset, getValues, setValue } =
    useForm<FormValues>({
      defaultValues: {
        itemsList: [
          {
            descripcion: "",
            cantidad: 1,
            precio: null,
          },
        ],
        comprobante: "",
        presupuesto: "",
        fecha: `${year}-${month}-${day}`,
        cliente: "",
        domicilio: "",
        vendedor: "",
        contacto: "",
        IVA: "EXENTO",
        expediente: "",
        condVenta: "CTA CTE",
      },
    });

  const { fields, append, remove } = useFieldArray({
    name: "itemsList",
    control,
    rules: {
      required: "Agrega un item almenos.",
    },
  });

  const datos = watch();

  // console.log(datos);

  const cliente = watch("cliente");
  const vendedor = watch("vendedor");

  useEffect(() => {
    if (cliente && defaultDataCliente[cliente]) {
      setValue("domicilio", defaultDataCliente[cliente].domicilio);
    }
  }, [cliente, reset, getValues]);

  useEffect(() => {
    if (vendedor && defaultDataVendedor[vendedor]) {
      setValue("contacto", defaultDataVendedor[vendedor].contacto);
    }
  }, [vendedor, reset, getValues]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center gap-4 py-8 md:py-10">
        <h2 className={subtitle({ class: "mt-4" })}>Datos fijos:</h2>
        <div className="border rounded  w-full flex gap-3 flex-wrap">
          <figure className="w-fit bg-white ">
            <img
              alt="logo portal informatica"
              className="max-w-sm w-full"
              src={Logo}
            />
          </figure>
          <article className="px-5 py-5">
            <p>C.U.I.T.: 30-71816831-3</p>
            <p>Ing.Bruto: 380620</p>
            <p>Inicio de Act.: 01/08/2023</p>
          </article>
        </div>
        <div className="flex w-full justify-between">
          <h2 className={subtitle({ class: "mt-4" })}>Datos editables:</h2>
          <Button color="warning" onClick={() => reset()}>
            Borrar datos
          </Button>
        </div>

        <form className="border rounded  w-full  p-5 ">
          <div className="flex gap-6 flex-wrap">
            <div className="flex flex-col gap-6">
              <label className="flex flex-col gap-1">
                <span>Comprobante: </span>
                <input
                  className="py-1 px-2 border border-gray-500 rounded"
                  {...register(`comprobante`, {
                    required: true,
                  })}
                />
              </label>

              <label className="flex flex-col gap-1">
                <span>Presupuesto Nº:</span>
                <input
                  className="py-1 px-2 border border-gray-500 rounded"
                  type="number"
                  {...register(`presupuesto`, {
                    required: true,
                  })}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Fecha:</span>
                <input
                  className="py-1 px-2 border border-gray-500 rounded"
                  type="date"
                  {...register(`fecha`, {
                    required: true,
                  })}
                />
              </label>
            </div>
            <div className="flex flex-col gap-6">
              <label className="flex flex-col gap-1">
                <span>Señor/a: </span>
                <input
                  className="py-1 px-2 border border-gray-500 rounded"
                  list="clientes"
                  {...register(`cliente`, {
                    required: true,
                  })}
                />
                <datalist id="clientes">
                  <option value="DIRECCION DE MATERIALES Y CONSTRUCCIONES ESCOLARES" />
                  <option value="Policia" />
                </datalist>
              </label>
              <label className="flex flex-col gap-1">
                <span>Domicilio:</span>
                <input
                  {...register(`domicilio`, {
                    required: true,
                  })}
                  className="py-1 px-2 border border-gray-500 rounded"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Vendedor: </span>
                <input
                  className="py-1 px-2 border border-gray-500 rounded"
                  list="vendedores"
                  {...register(`vendedor`, {
                    required: true,
                  })}
                />
                <datalist id="vendedores">
                  <option value="PALACIO EZEQUIEL" />
                  <option value="DIP RAMIRO" />
                </datalist>
              </label>
              <label className="flex flex-col gap-1">
                <span>Contacto:</span>
                <input
                  {...register(`contacto`, {
                    required: true,
                  })}
                  className="py-1 px-2 border border-gray-500 rounded"
                />
              </label>
            </div>
            <div className="flex flex-col gap-6">
              <label className="flex flex-col gap-1">
                <span>I.V.A.: </span>
                <input
                  className="py-1 px-2 border border-gray-500 rounded"
                  defaultValue={"EXENTO"}
                  {...register(`IVA`, {
                    required: true,
                  })}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>EXPTE. Nº:</span>
                <input
                  {...register(`expediente`, {
                    required: true,
                  })}
                  className="py-1 px-2 border border-gray-500 rounded"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Cond. Venta: </span>
                <input
                  className="py-1 px-2 border border-gray-500 rounded"
                  defaultValue={"CTA CTE"}
                  {...register(`condVenta`, {
                    required: true,
                  })}
                />
              </label>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex flex-col gap-6 flex-wrap">
            <h2 className={subtitle()}>Detalle:</h2>

            {fields.map((field, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-6 flex-wrap border-b-neutral-600 border-b-1 pb-6 "
                >
                  <label className="flex flex-col gap-1 flex-1">
                    <span>Descripción: </span>
                    <input
                      className="py-1 px-2 border border-gray-500 rounded"
                      {...register(`itemsList.${index}.descripcion`, {
                        required: true,
                      })}
                    />
                  </label>
                  <label className="flex flex-col gap-1 shrink-0">
                    <span>Cantidad: </span>
                    <input
                      className="py-1 px-2 border w-20 border-gray-500 rounded"
                      {...register(`itemsList.${index}.cantidad`, {
                        required: true,
                      })}
                      type="number"
                    />
                  </label>
                  <label className="flex flex-col gap-1 shrink-0">
                    <span>Precio: </span>
                    <input
                      className="py-1 px-2 border w-40 border-gray-500 rounded"
                      min={0}
                      placeholder="0"
                      type="number"
                      {...register(`itemsList.${index}.precio`, {
                        required: true,
                      })}
                    />
                  </label>
                  <Button
                    className="mt-auto"
                    color="danger"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Borrar
                  </Button>
                </div>
              );
            })}
            <TotalAmout control={control} />
            <Button
              type="button"
              onClick={() => {
                append({
                  descripcion: "",
                  cantidad: 1,
                  precio: 0,
                });
              }}
            >
              Agregar item
            </Button>
          </div>
        </form>
        {loaded ? (
          <PDFViewer height={1200}>
            <PDF
              IVA={datos.IVA}
              cliente={datos.cliente}
              comprobante={datos.comprobante}
              condVenta={datos.condVenta}
              contacto={datos.contacto}
              domicilio={datos.domicilio}
              expediente={datos.expediente}
              fecha={datos.fecha}
              itemsList={datos.itemsList}
              presupuesto={datos.presupuesto}
              vendedor={datos.vendedor}
            />
          </PDFViewer>
        ) : (
          ""
        )}
        {/* <PDFDownloadLink}
        document={
          <PDF
            IVA={datos.IVA}
            cliente={datos.cliente}
            comprobante={datos.comprobante}
            condVenta={datos.condVenta}
            contacto={datos.contacto}
            domicilio={datos.domicilio}
            expediente={datos.expediente}
            fecha={datos.fecha}
            itemsList={datos.itemsList}
            presupuesto={datos.presupuesto}
            vendedor={datos.vendedor}
          />
        }
        fileName="dsfdsf"
      >
        Descargar
      </PDFDownloadLink> */}
      </section>
    </DefaultLayout>
  );
}
