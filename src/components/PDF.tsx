"use client";
import { FormValues } from "@/utils";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";


const styles = StyleSheet.create({
  page: {
    marginTop: 80,
  },
  mainContainer: {
    marginHorizontal: "auto",
    width: "90%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    columnGap: 10,
  },
  headerImage: {
    height: "auto",
    width: "45%",
    objectFit: "contain",
  },
  headerData: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
  textSize: {
    fontSize: 9,
    fontWeight: 500,
  },
  textContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-around",
  },
  datoHeader: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  middelSection: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    marginTop: 20,
  },
  detalleSection: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    marginTop: 10,
    minHeight: "55%",
    position: "relative",
  },
  detallePadding: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 8,
  },
  linea: {
    position: "absolute",
    height: "100%",
    width: 1,
    backgroundColor: "black",
    top: 0,
    zIndex: "-1",
  },
  border: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
});

const PDF = ({
  itemsList,
  comprobante = "",
  presupuesto,
  fecha,
  cliente,
  domicilio,
  vendedor,
  contacto,
  IVA,
  expediente,
  condVenta,
}: FormValues) => {
  const [year, month, day] = fecha.split("-");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Image src="./logo-portal.png" style={styles.headerImage} />
            <View style={styles.headerData}>
              <View
                style={[
                  styles.textContainer,
                  {
                    borderRightColor: "black",
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    flex: 1,
                  },
                ]}
              >
                <Text style={styles.textSize}>C.U.I.T.: 30-71816831-3</Text>
                <Text style={styles.textSize}>Ing.Bruto: 380620</Text>
                <Text style={styles.textSize}>Inicio de Act.: 01/08/2023</Text>
              </View>
              <View
                style={[
                  {
                    borderRightColor: "black",
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    flex: 0.7,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  },
                ]}
              >
                <Image
                  src="./x.png"
                  style={{
                    height: 30,
                    width: 30,
                    objectFit: "contain",
                    borderWidth: 1,
                    borderColor: "black",
                    borderStyle: "solid",
                    padding: 5,
                  }}
                />
                <Text
                  style={[
                    {
                      textAlign: "center",
                      marginHorizontal: "auto",
                      fontSize: 6,
                    },
                  ]}
                >
                  DOCUMENTO NO VALIDO COMO FACTURA
                </Text>
              </View>
              <View
                style={[styles.textContainer, { flex: 1, textAlign: "right" }]}
              >
                <View style={styles.datoHeader}>
                  <Text style={[styles.textSize, { flex: 1 }]}>
                    Comprobante:
                  </Text>
                  <Text
                    style={[
                      styles.textSize,
                      { flex: 0.8, textAlign: "left", marginLeft: 3 },
                    ]}
                  >
                    {comprobante}
                  </Text>
                </View>

                <View style={styles.datoHeader}>
                  <Text style={[styles.textSize, { flex: 1 }]}>
                    Presupuesto Nº:
                  </Text>
                  <Text
                    style={[
                      styles.textSize,
                      { flex: 0.8, textAlign: "left", marginLeft: 3 },
                    ]}
                  >
                    {presupuesto}
                  </Text>
                </View>
                <View style={styles.datoHeader}>
                  <Text style={[styles.textSize, { flex: 1 }]}>Fecha:</Text>
                  <Text
                    style={[
                      styles.textSize,
                      { flex: 0.8, textAlign: "left", marginLeft: 3 },
                    ]}
                  >
                    {`${day}/${month}/${year}`}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.middelSection}>
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRightColor: "black",
                borderRightStyle: "solid",
                borderRightWidth: 1,
                flex: 2,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <View style={styles.datoHeader}>
                <Text style={[styles.textSize, { textAlign: "right" }]}>
                  Señor/a:
                </Text>
                <Text
                  style={[
                    styles.textSize,
                    { flex: 1, textAlign: "left", marginLeft: 3 },
                  ]}
                >
                  {cliente}
                </Text>
              </View>
              <View style={styles.datoHeader}>
                <Text style={[styles.textSize, { textAlign: "right" }]}>
                  Domicilio:
                </Text>
                <Text
                  style={[
                    styles.textSize,
                    { flex: 1, textAlign: "left", marginLeft: 3 },
                  ]}
                >
                  {domicilio}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View style={styles.datoHeader}>
                  <Text style={[styles.textSize, {}]}>Vendedor:</Text>
                  <Text
                    style={[
                      styles.textSize,
                      { flex: 0.8, textAlign: "left", marginLeft: 3 },
                    ]}
                  >
                    {vendedor}
                  </Text>
                </View>
                <View style={styles.datoHeader}>
                  <Text style={[styles.textSize, { flex: 1 }]}>Contacto:</Text>
                  <Text
                    style={[
                      styles.textSize,
                      { flex: 0.8, textAlign: "left", marginLeft: 3 },
                    ]}
                  >
                    {contacto}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                paddingVertical: 5,
                paddingHorizontal: 10,
              }}
            >
              <View style={styles.datoHeader}>
                <Text
                  style={[styles.textSize, { flex: 1, textAlign: "right" }]}
                >
                  I.V.A.:
                </Text>
                <Text
                  style={[
                    styles.textSize,
                    { flex: 2, textAlign: "left", marginLeft: 3 },
                  ]}
                >
                  {IVA}
                </Text>
              </View>
              <View style={styles.datoHeader}>
                <Text
                  style={[styles.textSize, { flex: 1, textAlign: "right" }]}
                >
                  EXPTE. Nº :
                </Text>
                <Text
                  style={[
                    styles.textSize,
                    { flex: 2, textAlign: "left", marginLeft: 3 },
                  ]}
                >
                  {expediente}
                </Text>
              </View>
              <View style={styles.datoHeader}>
                <Text
                  style={[styles.textSize, { flex: 1, textAlign: "right" }]}
                >
                  Cond. Venta:
                </Text>
                <Text
                  style={[
                    styles.textSize,
                    { flex: 2, textAlign: "left", marginLeft: 3 },
                  ]}
                >
                  {condVenta}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.detalleSection}>
            <Text
              style={{
                backgroundColor: "black",
                textAlign: "center",
                paddingVertical: 2,
                color: "white",
                fontSize: 9,
              }}
            >
              DETALLE
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid black",
              }}
            >
              <View style={[styles.detallePadding, { flex: 1 }]}>
                <Text>Item</Text>
              </View>
              <View style={[styles.detallePadding, { flex: 15 }]}>
                <Text>Descripción</Text>
              </View>
              <View style={[styles.detallePadding, { flex: 2 }]}>
                <Text>Cantidad</Text>
              </View>
              <View style={[styles.detallePadding, { flex: 4 }]}>
                <Text>Precio</Text>
              </View>
              <View style={[styles.detallePadding, { flex: 4 }]}>
                <Text>Subtotal</Text>
              </View>
            </View>
            {itemsList?.length > 0 &&
              itemsList?.map((item, index) => (
                <View
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    borderBottom: "1px solid black",
                  }}
                >
                  <View
                    style={[
                      styles.detallePadding,
                      { flex: 1, textAlign: "center" },
                    ]}
                  >
                    <Text>{index + 1}</Text>
                  </View>
                  <View style={[styles.detallePadding, { flex: 15 }]}>
                    <Text>{item.descripcion}</Text>
                  </View>
                  <View
                    style={[
                      styles.detallePadding,
                      { flex: 2, textAlign: "center" },
                    ]}
                  >
                    <Text>{item.cantidad}</Text>
                  </View>
                  <View style={[styles.detallePadding, { flex: 4 }]}>
                    <Text>${item?.precio?.toLocaleString("es-ES")}</Text>
                  </View>
                  <View style={[styles.detallePadding, { flex: 4 }]}>
                    <Text>
                      $
                      {item?.precio && item?.cantidad
                        ? (item?.precio * item?.cantidad).toLocaleString(
                            "es-ES"
                          )
                        : 0}
                    </Text>
                  </View>
                </View>
              ))}
            <View style={[styles.linea, { left: 29 }]} />
            <View style={[styles.linea, { left: 315 }]} />
            <View style={[styles.linea, { left: 363 }]} />
            <View style={[styles.linea, { left: 445 }]} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
