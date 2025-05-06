import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


interface Stock {
  ticker: string;
  open: number;
  high: number;
  low: number;
  close: number;
}
export default function StockDashboard() {
  const [stocks, setStocks] = useState<Stock[]>([
    { ticker: "AAPL", open: 175.2, high: 180.0, low: 174.5, close: 179.8 },
    { ticker: "GOOGL", open: 2800.5, high: 2850.3, low: 2795.1, close: 2845.7 },
  ]);

  const [newStock, setNewStock] = useState<Stock>({
    ticker: "",
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  });

  const addStock = () => {
    if (newStock.ticker) {
      setStocks([...stocks, newStock]);
      setNewStock({ ticker: "", open: 0, high: 0, low: 0, close: 0 });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📈 Stock Dashboard</h1>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <Input
          placeholder="Ticker"
          value={newStock.ticker}
          onChange={(e) => setNewStock({ ...newStock, ticker: e.target.value })}
        />
        <Input
          placeholder="Open"
          type="number"
          value={newStock.open}
          onChange={(e) => setNewStock({ ...newStock, open: parseFloat(e.target.value) })}
        />
        <Input
          placeholder="High"
          type="number"
          value={newStock.high}
          onChange={(e) => setNewStock({ ...newStock, high: parseFloat(e.target.value) })}
        />
        <Input
          placeholder="Low"
          type="number"
          value={newStock.low}
          onChange={(e) => setNewStock({ ...newStock, low: parseFloat(e.target.value) })}
        />
        <Input
          placeholder="Close"
          type="number"
          value={newStock.close}
          onChange={(e) => setNewStock({ ...newStock, close: parseFloat(e.target.value) })}
        />
        <Button className="col-span-2" onClick={addStock}>
          Thêm cổ phiếu
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {stocks.map((stock, index) => (
          <Card key={index} className="mb-3 p-4 shadow-lg rounded-lg">
            <CardContent>
              <h2 className="text-xl font-semibold">{stock.ticker}</h2>
              <p className="text-sm text-gray-600">
                Open: {stock.open} | High: {stock.high} | Low: {stock.low} | Close: {stock.close}
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
