<?php
class Stock {
    public string $ticker;
    public float $open;
    public float $high;
    public float $low;
    public float $close;

    public function __construct(string $ticker, float $open, float $high, float $low, float $close) {
        $this->ticker = $ticker;
        $this->open = $open;
        $this->high = $high;
        $this->low = $low;
        $this->close = $close;
    }

    public function display(): void {
        echo "Mã cổ phiếu: {$this->ticker}\n";
        echo "Giá mở cửa: {$this->open}\n";
        echo "Giá cao nhất: {$this->high}\n";
        echo "Giá thấp nhất: {$this->low}\n";
        echo "Giá đóng cửa: {$this->close}\n";
        echo str_repeat("-", 30) . "\n";
    }
}

class StockManager {
    private array $stocks = [];

    public function addStock(Stock $stock): void {
        $this->stocks[] = $stock;
    }

    public function displayAll(): void {
        echo "Danh sách cổ phiếu:\n";
        foreach ($this->stocks as $stock) {
            $stock->display();
        }
    }
}

// Sử dụng chương trình
$manager = new StockManager();
$manager->addStock(new Stock("AAPL", 175.2, 180.0, 174.5
