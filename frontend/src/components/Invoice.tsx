import { Text, View, Page, Document, StyleSheet } from "@react-pdf/renderer";

const Invoice = ({ invoice }: any) => {
  console.log(invoice);
  const styles = StyleSheet.create({
    page: {
      fontSize: 11,
      paddingTop: 20,
      paddingLeft: 40,
      paddingRight: 40,
      lineHeight: 1.5,
      flexDirection: "column",
    },

    invoiceTitle: { flexDirection: "row", marginTop: 24 },

    theader: {
      marginTop: 20,
      fontSize: 10,
      fontStyle: "bold",
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      height: 20,
      backgroundColor: "#DEDEDE",
      borderColor: "whitesmoke",
      borderRightWidth: 1,
      borderBottomWidth: 1,
    },

    theader2: { flex: 2, borderRightWidth: 0, borderBottomWidth: 1 },

    invoice: { fontWeight: "bold", fontSize: 20 },

    Title: { fontSize: 16, textAlign: "center" },

    tbody: {
      fontSize: 9,
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      borderColor: "whitesmoke",
      borderRightWidth: 1,
      borderBottomWidth: 1,
    },

    total: {
      fontSize: 9,
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1.5,
      borderColor: "whitesmoke",
      borderBottomWidth: 1,
    },

    tbody2: { flex: 2, borderRightWidth: 1 },
  });

  const InvoiceTitle = () => (
    <View style={styles.invoiceTitle}>
      <Text style={styles.Title}>Reserve</Text>
    </View>
  );

  const Address = () => (
    <View style={styles.invoiceTitle}>
      <>
        <View>
          <Text style={styles.invoice}>Invoice </Text>
          <Text>Invoice number: {invoice?._id} </Text>
        </View>
      </>
    </View>
  );

  const TableHead = () => (
    <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
      <View style={[styles.theader, styles.theader2]}>
        <Text>Rooms</Text>
      </View>
      <View style={styles.theader}>
        <Text>Price</Text>
      </View>

      <View style={styles.theader}>
        <Text>Amount</Text>
      </View>
    </View>
  );

  const TableBody = () => (
    <View key={invoice._id} style={{ width: "100%", flexDirection: "row" }}>
      <View style={[styles.tbody, styles.tbody2]}>
        <Text>{invoice.customerName}</Text>
      </View>
      <View style={styles.tbody}>
        <Text>{invoice.price}</Text>
      </View>
      <View style={styles.tbody}>
        <Text>{invoice.totalCost.toFixed(2)}</Text>
      </View>
    </View>
  );

  const TableTotal = () => (
    <View style={{ width: "100%", flexDirection: "row" }}>
      <View style={styles.total}>
        <Text></Text>
      </View>
      <View style={styles.total}>
        <Text> </Text>
      </View>
      <View style={styles.tbody}>
        <Text>Total</Text>
      </View>
      <View style={styles.tbody}>
        <Text>{invoice.totalCost.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceTitle />
        <Address />

        <TableHead />
        <TableBody />
        <TableTotal />
      </Page>
    </Document>
  );
};

export default Invoice;
