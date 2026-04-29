import { CheckCircle2, Loader2, Minus, Plus, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import productMain from "@/assets/product-main.png";

const Stars = ({ className = "text-amber-400" }: { className?: string }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 fill-current ${className}`} />
    ))}
  </div>
);

export const ShopifyProductSection = () => {
  const [products, setProducts] = useState<ShopifyProduct[] | null>(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isAdding = useCartStore((s) => s.isLoading);

  useEffect(() => {
    fetchProducts(20)
      .then((p) => setProducts(p))
      .catch((e) => {
        console.error(e);
        toast.error("Failed to load products");
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="product" className="py-20">
        <div className="container flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-pink" />
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section id="product" className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center rounded-2xl bg-mint-soft p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">No products yet</h2>
            <p className="mt-3 text-muted-foreground">
              Your Shopify store is connected but empty. Tell me your product name, price, and description in
              chat and I'll create it for you.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const product = products[0];
  const variant = product.node.variants.edges[0]?.node;
  const image = product.node.images.edges[0]?.node;
  const compareAt = variant?.compareAtPrice;
  const price = variant?.price;
  const discountPct =
    compareAt && price
      ? Math.round(
          ((parseFloat(compareAt.amount) - parseFloat(price.amount)) / parseFloat(compareAt.amount)) * 100,
        )
      : 0;

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: qty,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { position: "top-center" });
  };

  return (
    <section id="product" className="py-12 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto items-center">
          <div className="rounded-2xl overflow-hidden shadow-card-soft bg-mint-soft">
            <img
              src={image?.url || productMain}
              alt={image?.altText || product.node.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-sm text-muted-foreground">No reviews yet</span>
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-foreground">{product.node.title}</h2>
            {price && (
              <div className="mt-5 flex items-center gap-3 flex-wrap">
                <span className="text-2xl font-bold text-pink">
                  {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                </span>
                {compareAt && (
                  <span className="text-lg text-muted-foreground line-through">
                    {compareAt.currencyCode} {parseFloat(compareAt.amount).toFixed(2)}
                  </span>
                )}
                {discountPct > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-pink-gradient text-white text-xs font-semibold px-3 py-1">
                    <CheckCircle2 className="h-3 w-3" /> Save {discountPct}%
                  </span>
                )}
              </div>
            )}
            {product.node.description && (
              <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {product.node.description}
              </p>
            )}

            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-2">Quantity</p>
              <div className="inline-flex items-center border border-border rounded-lg overflow-hidden">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 hover:bg-muted">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-6 py-2 font-semibold min-w-[3rem] text-center">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2 hover:bg-muted">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              disabled={isAdding || !variant?.availableForSale}
              className="mt-6 w-full md:w-80 rounded-full bg-pink-gradient text-white font-bold tracking-wider py-4 shadow-pink hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isAdding ? <Loader2 className="h-5 w-5 animate-spin" /> : variant?.availableForSale ? "ADD TO CART" : "SOLD OUT"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
