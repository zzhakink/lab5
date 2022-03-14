export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  link: string;
  category: number;
  likes: number;
  visibility: boolean;
}

export const products = [
  {
    id: 1,
    name: 'Toms of Maine',
    image: 'assets/img/1.jpg',
    description:
        'Toms of Maine Antiperspirant Deodorant for Women, Natural Powder, 2.25 oz. 3-Pack',
    link: "https://www.amazon.com/Toms-Maine-Antiperspirant-Deodorant-Natural/dp/B082VKCQF1/ref=sr_1_1_sspa?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFEODJKUTNWUUZQWkEmZW5jcnlwdGVkSWQ9QTA3MzgyOTRZQjRSTlpVTzhYVUYmZW5jcnlwdGVkQWRJZD1BMDU1MjA3NDE5Slo0SDVVTTgyOVQmd2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3NlJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    price: 299.99,
    rating: '4.5',
    likes: 10,
    visibility: true,
    category: 1,
  },
  {
    id: 2,
    name: '	Oil',
    image: 'assets/img/2.jpg',
    description: 'Golden Bundle, Premium Personal Care & Beard Grooming Set with All- Natural Products',
    link: "https://www.amazon.com/Golden-Premium-Personal-Grooming-Products/dp/B08WZ1FVQ1/ref=sr_1_2_sspa?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFEODJKUTNWUUZQWkEmZW5jcnlwdGVkSWQ9QTA3MzgyOTRZQjRSTlpVTzhYVUYmZW5jcnlwdGVkQWRJZD1BMDEyOTQ3NFdVV1FGQjYwRTU3VyZ3aWRnZXROYW1lPXNwX2F0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
    price: 129.99,
    rating: '4.6',
    likes: 84,
    visibility: true,
    category: 1,
  },
  {
    id: 3,
    name: 'Night Guard Adjustable',
    description: 'KOHEEL Night Guard Adjustable, Dental Guard Stops Bruxism, 2 Count (1 Pack)',
    link: "https://www.amazon.com/KOHEEL-Night-Adjustable-Dental-Bruxism/dp/B09QC12S4R/ref=sr_1_3_sspa?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFEODJKUTNWUUZQWkEmZW5jcnlwdGVkSWQ9QTA3MzgyOTRZQjRSTlpVTzhYVUYmZW5jcnlwdGVkQWRJZD1BMDExNjk4NTlSRkQ1SFZTMk5CMiZ3aWRnZXROYW1lPXNwX2F0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
    price: 29.99,
    image: '/assets/img/3.jpg',
    rating: '4.3',
    likes: 37,
    visibility: true,
    category: 1,
  },
  {
    id: 4,
    name: 'Makeup Remover',
    description: 'Neutrogena Makeup Remover Cleansing Face Wipes, Daily Cleansing Facial Towelettes to Remove Waterproof Makeup and Mascara, Alcohol-Free, Value Twin Pack, 25 Count, 2 Pack',
    link: "https://www.amazon.com/Neutrogena-Cleansing-Towelettes-Waterproof-Alcohol-Free/dp/B00U2VQZDS/ref=sr_1_4?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-4",
    price: 885.00,
    image: '/assets/img/4.jpg',
    rating: '4.7',
    likes: 2,
    visibility: true,
    category: 1,
  },
  {
    id: 5,
    name: 'Hydro Silk Touch-Up',
    description: 'Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool, Eyebrow Razor, and Facial Razor with Precision Cover, 3 Count (Packaging May Vary)',
    link: "https://www.amazon.com/Schick-Multipurpose-Exfoliating-Dermaplaning-Precision/dp/B0787GLBMV/ref=sr_1_5?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-5",
    price: 89.99,
    image: '/assets/img/5.jpg',
    rating: '4.8',
    likes: 5,
    visibility: true,
    category: 1,
  },
  {
    id: 6,
    name: 'CeraVe Moisturizing Cream',
    description: 'CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | Normal | Fragrance Free | 19 Oz',
    link: "https://www.amazon.com/CeraVe-Moisturizing-Cream-Daily-Moisturizer/dp/B00TTD9BRC/ref=sr_1_6?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-6",
    price: 2.99,
    image: '/assets/img/6.jpg',
    rating: '4.5',
    likes: 801,
    visibility: true,
    category: 2,
  },
  {
    id: 7,
    name: 'CeraVe AM Facial Moisturizing Lotion',
    description: 'CeraVe AM Facial Moisturizing Lotion SPF 30 | Oil-Free Face Moisturizer with Sunscreen | Non-Comedogenic | 3 Ounce',
    link: "https://www.amazon.com/CeraVe-Facial-Moisturizing-Lotion-AM/dp/B00F97FHAW/ref=sr_1_7?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-7",
    price: 14.99,
    image: '/assets/img/7.jpg',
    rating: '',
    likes: 734,
    visibility: true,
    category: 2,
  },
  {
    id: 8,
    name: 'TruSkin Vitamin C ',
    description: 'TruSkin Vitamin C Serum for Face, Anti Aging Serum with Hyaluronic Acid, Vitamin E, Organic Aloe Vera and Jojoba Oil, Hydrating & Brightening Serum for Dark Spots, Fine Lines and Wrinkles, 1 fl oz',
    link: "https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_8?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-8",
    price: 3.99,
    image: '/assets/img/8.jpg',
    rating: '4.5',
    likes: 931,
    visibility: true,
    category: 2,
  },
  {
    id: 9,
    name: 'PanOxyl Acne Foaming Wash',
    description: 'PanOxyl Acne Foaming Wash Benzoyl Peroxide 10% Maximum Strength Antimicrobial, 5.5 Oz',
    link: "https://www.amazon.com/PanOxyl-Foaming-Peroxide-Strength-Antimicrobial/dp/B081KL2QYJ/ref=sr_1_9?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-9",
    price: 14.99,
    image: '/assets/img/9.jpg',
    rating: '4.3',
    likes: 722467,
    visibility: true,
    category: 2,
  },
  {
    id: 10,
    name: 'Listerine Total Care',
    description: 'Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefit Oral Rinse Helps Kill 99% of Bad Breath Germs, Prevents Cavities, Strengthens Teeth, ADA-Accepted, Fresh Mint, 1 L',
    link: "https://www.amazon.com/Listerine-Anticavity-Mouthwash-Fluoride-Packaging/dp/B00495Q5OW/ref=sr_1_10?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-10",
    price: 7.99,
    image: '/assets/img/10.jpg',
    rating: '4.7',
    likes: 3753,
    visibility: true,
    category: 2,
  },
  {
    id: 11,
    name: '1984 by George Orwell',
    price: 9.99,
    description: `Written more than 70 years ago, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, his dystopian vision of a government that will do anything to control the narrative is timelier than ever...`,
    image: '/assets/img/11.jpg',
    rating: '4.7',
    likes: 34534,
    visibility: true,
    category: 3,
    link: 'https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934?ref_=Oct_d_obs_d_10399&pd_rd_w=spA0C&pf_rd_p=8000bc8c-c3b0-4816-9f00-5038ff54385c&pf_rd_r=57JZC1HM8H5HKTY2V7Y8&pd_rd_r=2d9f6504-5261-4493-b0bf-8102502dbb22&pd_rd_wg=IWhIn&pd_rd_i=0451524934'
  },
  {
    id: 12,
    name: 'To Kill a Mockingbird by Harper Lee',
    price: 83.99,
    description: `Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred`,
    image: '/assets/img/12.jpg',
    rating: '4.8',
    likes: 78676,
    visibility: true,
    category: 3,
    link: 'https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0060935464?ref_=Oct_d_otopr_d_10399&pd_rd_w=7lIro&pf_rd_p=8f269526-780e-4f8e-9daa-56fd73859d4c&pf_rd_r=57JZC1HM8H5HKTY2V7Y8&pd_rd_r=2d9f6504-5261-4493-b0bf-8102502dbb22&pd_rd_wg=IWhIn&pd_rd_i=0060935464'
  },
  {
    id: 13,
    name: 'No Longer Human by Ozamu Dazi',
    price: 45.00,
    description: `The poignant and fascinating story of a young man who is caught between the breakup of the traditions of a northern Japanese aristocratic family and the impact of Western ideas.`,
    image: '/assets/img/13.jpg',
    rating: '4.8',
    likes: 682978,
    visibility: true,
    category: 3,
    link: 'https://www.amazon.com/No-Longer-Human-Osamu-Dazai/dp/0811204812?ref_=Oct_d_omwf_d_10399&pd_rd_w=9kiqE&pf_rd_p=9bf776a0-7625-4f47-8aae-506f1d25b210&pf_rd_r=57JZC1HM8H5HKTY2V7Y8&pd_rd_r=2d9f6504-5261-4493-b0bf-8102502dbb22&pd_rd_wg=IWhIn&pd_rd_i=0811204812'
  },
  {
    id: 14,
    name: 'The Little Prince by Antoine de Saint-Exupéry',
    price: 12.99,
    description: `Now with the restored original artwork, the beloved classic story of a young prince's travels throughout space??―??a profound tale about loneliness and loss, and love and friendship.`,
    image: '/assets/img/14.jpg',
    rating: '4.8',
    likes: 999999,
    visibility: true,
    category: 3,
    link: 'https://www.amazon.com/Little-Prince-Antoine-Saint-Exupéry/dp/0156012197?ref_=Oct_d_omg_d_10399&pd_rd_w=n5a3I&pf_rd_p=91d04f53-a5e6-477b-803f-81835dc5f501&pf_rd_r=57JZC1HM8H5HKTY2V7Y8&pd_rd_r=2d9f6504-5261-4493-b0bf-8102502dbb22&pd_rd_wg=IWhIn&pd_rd_i=0156012197'
  },
  {
    id: 15,
    name: 'Fahrenheit 451 by Ray Bradbury',
    price: 18.88,
    description: `Nearly seventy years after its original publication, Ray Bradbury’s internationally acclaimed novel Fahrenheit 451 stands as a classic of world literature set in a bleak, dystopian future. Today its message has grown more relevant than ever before.`,
    image: '/assets/img/15.jpg',
    rating: '4.6',
    likes: 345378,
    visibility: true,
    category: 3,
    link: 'https://www.amazon.com/Fahrenheit-451-Ray-Bradbury/dp/1451673310/ref=lp_10399_1_7'
  },
  {
    id: 16,
    name: 'Thriller',
    price: 31.56,
    description: `The materials used to create picture discs and color vinyl are not the same as traditional vinyl. Picture discs will have an inherent surface noise in playback. This is a novelty item and not intended for a listening experience.`,
    image: '/assets/img/16.jpg',
    rating: '4.8',
    likes: 34387532453,
    visibility: true,
    category: 4,
    link: 'https://www.amazon.com/Thriller-Michael-Jackson/dp/B001DUKHXQ?ref_=Oct_d_otopr_d_63704&pd_rd_w=fIgGb&pf_rd_p=8f269526-780e-4f8e-9daa-56fd73859d4c&pf_rd_r=9BR7F77KGH9ZPVX2NNQ1&pd_rd_r=04a3f1d1-7fd8-455f-a10d-dceee18c8efa&pd_rd_wg=ttLWd&pd_rd_i=B001DUKHXQ'
  },
  {
    id: 17,
    name: 'Musique, Vol. 1 1993 - 2005',
    price: 17.99,
    description: `Daft Punk quickly rose to acclaim in 1993 by adapting a love for first-wave acid house and techno to their younger roots in pop, indie rock, and hip-hop. The combined talents of DJs Guy-Manuel de Homem-Christo and Thomas Bangalter as Daft Punk have been responsible for the most memorable and genre-defying house hits of the last decade. Musique Vol 1 1993-2005 offers for the first time their collected singles and several rare remixes. Virgin. 2006.`,
    image: '/assets/img/17.jpg',
    rating: '4.6',
    likes: 534735243,
    visibility: true,
    category: 4,
    link: 'https://www.amazon.com/Musique-Vol-1993-2005-DAFT-PUNK/dp/B000EHPXXI/ref=sr_1_13?crid=1OMJGLI3OATGK&keywords=daft+punk&qid=1647171399&s=music&sprefix=daft+punk%2Cmusic-intl-ship%2C439&sr=1-13'
  },
  {
    id: 18,
    name: 'Pink Moon',
    price: 70.73,
    description: `Heavyweight 180gm virgin vinyl LP repressing of this 1972 album. Nick Drake's third and final album, many consider to be his finest moment, was a radical departure from his previous work, stripped of the lush orchestral arrangements, Pink Moon featured Drake alone on vocals, acoustic guitar and the occasional piano accompaniment. This starkness was matched in brevity, with Pink Moon consisting of 11 short songs coming to less than half-an-hour of music. Though critically well received at the time, commercial success did not arrive till nearly 30 years later, when 30 seconds of 'Pink Moon' was used in a Volkswagen commercial.`,
    image: '/assets/img/18.jpg',
    rating: '4.8',
    likes: 737537545374,
    visibility: true,
    category: 4,
    link: 'https://www.amazon.com/Pink-Moon-Vinyl-Nick-Drake/dp/B001AGNRYO/ref=sr_1_1?crid=IU5JH03X2TCQ&keywords=pink+moon&qid=1647171516&s=music&sprefix=pink+mo%2Cmusic-intl-ship%2C265&sr=1-1'
  },
  {
    id: 19,
    name: 'Eat Ya Veggies Purple',
    price: 29.98,
    description: ``,
    image: '/assets/img/19.jpg',
    rating: '5',
    likes: 0,
    visibility: true,
    category: 4,
    link: 'https://www.amazon.com/Eat-Ya-Veggies-Purple-bbno/dp/B09JM5KJ9Y/ref=sr_1_1?crid=38TYUMOKQUIHZ&keywords=bbno%24&qid=1647171707&s=music&sprefix=bono%2Cmusic-intl-ship%2C253&sr=1-1'
  },
  {
    id: 20,
    name: 'The Wall',
    price: 45.00,
    description: `Pink Floyd s The Wall is one of the most acclaimed concept albums of all time selling over 23 million copies in the US alone.`,
    image: '/assets/img/20.jpg',
    rating: '4.8',
    likes: 453768,
    visibility: true,
    category: 4,
    link: 'https://www.amazon.com/Wall-Pink-Floyd/dp/B00536OCYG/ref=sr_1_2?crid=3O50WGFQF11MS&keywords=wall&qid=1647171785&s=music&sprefix=wal%2Cmusic-intl-ship%2C282&sr=1-2'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
