import { Shopify } from '@shopify/shopify-api';

const shopifyAccessToken = process.env.SHOPIFY_ACCESS_TOKEN;
const shop = process.env.SHOP;

export default async function handler(req, res) {
  const storefrontClient = new Shopify.Clients.Graphql(
    shop,
    shopifyAccessToken
  );

  const { id = null } = req.query;

  if (id == null) return res.send('please supply product variant id');

  let products;
  try {
    products = await storefrontClient.query({
      data: {
        query: `query GetAllPrices($id: ID!) {
          productVariant(id: $id) {
            GB: contextualPricing(context: {country: GB}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            US: contextualPricing(context: {country: US}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            AU: contextualPricing(context: {country: AU}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            CA: contextualPricing(context: {country: CA}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            CL: contextualPricing(context: {country: CL}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            CO: contextualPricing(context: {country: CO}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            JP: contextualPricing(context: {country: JP}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            KR: contextualPricing(context: {country: KR}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            AD: contextualPricing(context: {country: AD}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            AT: contextualPricing(context: {country: AT}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            BE: contextualPricing(context: {country: BE}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            CY: contextualPricing(context: {country: CY}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            DE: contextualPricing(context: {country: DE}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            EE: contextualPricing(context: {country: EE}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            ES: contextualPricing(context: {country: ES}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            FI: contextualPricing(context: {country: FI}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            FR: contextualPricing(context: {country: FR}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            GR: contextualPricing(context: {country: GR}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            IE: contextualPricing(context: {country: IE}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            IT: contextualPricing(context: {country: IT}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            LT: contextualPricing(context: {country: LT}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            LU: contextualPricing(context: {country: LU}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            LV: contextualPricing(context: {country: LV}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            MC: contextualPricing(context: {country: MC}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            MT: contextualPricing(context: {country: MT}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            NL: contextualPricing(context: {country: NL}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            PT: contextualPricing(context: {country: PT}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            SI: contextualPricing(context: {country: SI}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            SK: contextualPricing(context: {country: SK}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            CH: contextualPricing(context: {country: CH}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            LI: contextualPricing(context: {country: LI}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            DK: contextualPricing(context: {country: DK}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            IS: contextualPricing(context: {country: IS}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            NO: contextualPricing(context: {country: NO}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            SE: contextualPricing(context: {country: SE}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            CZ: contextualPricing(context: {country: CZ}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            PO: contextualPricing(context: {country: PL}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
            RO: contextualPricing(context: {country: RO}) {
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
          }
        }`,
        variables: {
          id: `gid://shopify/ProductVariant/${id}`,
        },
      },
    });
  } catch (err) {
    // console.error(err)
    return res.status(500).send(err);
  }

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');
  res.status(200).json(products.body.data.productVariant);
}
