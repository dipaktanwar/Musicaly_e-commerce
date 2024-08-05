import React from 'react'
import   "./productstyle.css"
export default function Products() {
    const product=[
        {
            "product_id": "1001",
            "name": "Sony WH-1000XM4",
            "price_inr": 25990,
            "color": "Black",
            "type": "Over-Ear",
            "brand": "Sony",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "Industry-leading noise-canceling headphones with excellent sound quality and long battery life.",
            "wireless": true,
            "connectivity": "Bluetooth",
            "battery_life": "Up to 30 hours",
            "image_url": "https://d1ncau8tqf99kp.cloudfront.net/converted/74739_original_local_1200x1050_v3_converted.webp"
        },
        {
            "product_id": "1002",
            "name": "Apple AirPods Pro",
            "price_inr": 18990,
            "color": "White",
            "type": "In-Ear",
            "brand": "Apple",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "True wireless earbuds with active noise cancellation and customizable fit for all-day comfort.",
            "wireless": true,
            "connectivity": "Bluetooth",
            "battery_life": "Up to 24 hours",
            "image_url": "https://media.extra.com/s/aurora/100224355_800/Apple-Airpods-Max-Over-Ear-Headphone-Green?locale=en-GB,en-,"
        },
        {
            "product_id": "1003",
            "name": "Bose QuietComfort 35 II",
            "price_inr": 21990,
            "color": "Silver",
            "type": "Over-Ear",
            "brand": "Bose",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "Comfortable over-ear headphones with top-tier noise cancellation and balanced sound.",
            "wireless": true,
            "connectivity": "Bluetooth",
            "battery_life": "Up to 20 hours",
            "image_url": "https://th.bing.com/th/id/OIP.BObWxNLL8j7xzANPgHlslgHaHa?rs=1&pid=ImgDetMain"
        },
        {
            "product_id": "1004",
            "name": "Sennheiser HD 660 S",
            "price_inr": 34990,
            "color": "Black",
            "type": "Over-Ear",
            "brand": "Sennheiser",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "High-fidelity open-back headphones with exceptional clarity and precise sound reproduction.",
            "wireless": false,
            "connectivity": "Wired",
            "image_url": "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo3-wireless/pdp/product-carousel/black/alt/black-01-solo3.jpg.large.2x.jpg"
        },
        {
            "product_id": "1005",
            "name": "Beats Solo Pro",
            "price_inr": 23990,
            "color": "White",
            "type": "On-Ear",
            "brand": "Beats",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "On-ear headphones with active noise cancellation and powerful, balanced sound.",
            "wireless": true,
            "connectivity": "Bluetooth",
            "battery_life": "Up to 22 hours",
            "image_url": "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/plp/plp-studiopro-sandstone.jpg.large.2x.jpg"
        },
        {
            "product_id": "1006",
            "name": "Audio-Technica ATH",
            "price_inr": 10490,
            "color": "Black",
            "type": "Over-Ear",
            "brand": "Audio-Technica",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "Professional studio monitor headphones with exceptional clarity and sound isolation.",
            "wireless": false,
            "connectivity": "Wired",
            "image_url": "https://www.audio-technica.com/en-us/media/catalog/product/cache/d5446cb51b7b03a7a4e70428ee9aeb56/a/t/ath-m50x_01_1.png"
        },
        {
            "product_id": "1007",
            "name": "Jabra Elite 85h",
            "price_inr": 17999,
            "color": "Titanium Black",
            "type": "Over-Ear",
            "brand": "Jabra",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "Wireless over-ear headphones with advanced noise cancellation and long-lasting battery life.",
            "wireless": true,
            "connectivity": "Bluetooth",
            "battery_life": "Up to 36 hours",
            "image_url": "https://photo3.i-run.fr/jabra-elite-85h-electronique-324431-1-fz.jpg"
        },
        {
            "product_id": "1008",
            "name": "Beyerdynamic DT 990",
            "price_inr": 15990,
            "color": "Black",
            "type": "Over-Ear",
            "brand": "Beyerdynamic",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "Open-back studio headphones with high-resolution sound reproduction and comfortable design.",
            "wireless": false,
            "connectivity": "Wired",
            "image_url": "https://d33p2k2w4zpozf.cloudfront.net/media/catalog/product/cache/ad749deec4a285f568434538fd53bd61/b/e/beyerdynamic-dt-990-pro-front.png"
        },
        {
            "product_id": "1009",
            "name": " Apple SteelSeries ",
            "price_inr": 13990,
            "color": "Black",
            "type": "Over-Ear",
            "brand": "SteelSeries",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "Wireless gaming headphones with DTS Headphone:X v2.0 surround sound and ClearCast bidirectional microphone.",
            "wireless": true,
            "connectivity": "Wireless",
            "battery_life": "Up to 24 hours",
            "image_url": "https://m.media-amazon.com/images/I/81pCpKFjBZL.SX679.jpg"
        },
        {
            "product_id": "1010",
            "name": "AKG K702",
            "price_inr": 23990,
            "color": "Black",
            "type": "Over-Ear",
            "brand": "AKG",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "Open-back reference headphones with flat-wire voice coil and patented Varimotion two-layer diaphragm for precise sound.",
            "wireless": false,
            "connectivity": "Wired",
            "image_url": "https://www.akg.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwc1fa7986/AKG_k702.png"
        },
        {
            "product_id": "1011",
            "name": "Shure SRH1540",
            "price_inr": 39990,
            "color": "Black",
            "type": "Over-Ear",
            "brand": "Shure",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "Closed-back premium headphones with rich bass, clear midrange, and extended highs.",
            "wireless": false,
            "connectivity": "Wired",
            "image_url": "http://www.economik.com/products/14501-15000/14593_full.jpg"
        },
        {
            "product_id": "1012",
            "name": " Sony Marshall ",
            "price_inr": 29990,
            "color": "Black",
            "type": "Over-Ear",
            "brand": "Marshall",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "Active noise-canceling wireless headphones with up to 30 hours of playtime and custom-tuned drivers.",
            "wireless": true,
            "connectivity": "Bluetooth",
            "battery_life": "Up to 30 hours",
            "image_url": "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw1394819b/images/marshall/headphones/monitor-ii-anc/large/mh-monitor-II-ANC-large-1.png?sw=1120&sh=1120&sm=fit"
        },
        {
            "product_id": "1013",
            "name": " Sony Audeze LCD-X",
            "price_inr": 79990,
            "color": "Black",
            "type": "Over-Ear",
            "brand": "Audeze",
            "rating": "⭐⭐⭐⭐⭐",
            "about_item": "Planar magnetic headphones with extremely low distortion and wide soundstage.",
            "wireless": false,
            "connectivity": "Wired",
            "image_url": "https://www.audeze.com/cdn/shop/products/LCD-X_Updated_2019_4471x4471_2000x.jpg?v=1570129683"
        }
    ]
  return (
    <div className= 'item-container'>
        <div>{
          <div className= 'product'>
            {
                product.map((e)=>{
                  return( 
                    <div className='product-item'> 
                   <img src={e.image_url}  alt={e.name}/>  
                       <div className='dataname'> <p> {e.name} </p>
                        <p>  Price{e.price_inr} </p>
                        <p> {e.color}|{e.type}</p>
                        </div>
                        </div>
                  )
                })
              
            }
           </div> 

        }
     </div>
    </div>
  )
}
