const CategoryData = [
    {
        CategoryID: 1,
        CategoryName: 'Thời trang nam',
        Image: 'https://s3-alpha-sig.figma.com/img/6a13/9654/f02477431136f0b9006ba471c6358f41?Expires=1568592000&Signature=ZcWTEy1cFNIV5NfEhZYEl9HdGaYIdlVXekgzsNj8ZcpmNtFJ2PJLiYlzxYxcJdHFsSN8OmjRzi26mbWSpumkrAtcvE8K0X63zVYkOIFE5IxrdAYYd-O57mWGg7sYYxbiPwWwDQsVMPreFeAa3Vh~t0HaOiFqVynj~nTHsz6TB7ReetfgYeFrpCpfo8CeIZiHeYZHTjXpoQCNhCvmO~txyCLNRk3IRlygVyxcJFb~E30GouNlv~BD6o7bG0AXM6QbyhGutGscLhnBscjr27nFsIKJ6DaXlGxyeS8GwhBR7hNWaUcQ0Ez0hqWVYOkuyEXu~MHj0nYUxKkIbabzFSkXrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 2,
        CategoryName : 'Thời trang nữ',
        Image: 'https://s3-alpha-sig.figma.com/img/842c/2a0d/5508599a8e9a4ae974c9afb06e24093a?Expires=1568592000&Signature=AEXRiumDSUdpcKq22kB6Q01h-bALRRzPMyTvsX3f46gCGbWqm9f1mQwqYM1rpM3bGuPsR0ATEjRvn-ydLiDxNyKuRsjfj-tvj3qmotNswj-4NlkPR5kdPOlpUKKONxbL4oQ1ihbWlxq9O~ng~q-aaEhkKFlfOCP~Q84z2uKk3eqn~tRpEtUOtnh8hSdpw8cVD9cbJN7IbbXMzIFXub1ITyAAr2-7y~jmxe9mXrrKhGnlhjirsOh1haZAK3tKNd-s5XD5as568auoznNZwobWMhxBcnqdzQ5b87zzramIbxxKf-KPmjwIxC8mzep8lv4zMXc9fmYWXY~DT5Y4cVAOmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 3,
        CategoryName : 'Đồng hồ',
        Image: 'https://s3-alpha-sig.figma.com/img/e68b/0595/1e691e5798e8e0f9b31c764f9c8ed7ff?Expires=1568592000&Signature=IsE-W0IK5wjAkxPRMZPrP1M78G0FAMV7EIAPw3c5smlAGls7oevOUQidCuA5GSVmpIEeSUkOBqtIY7qJR-5bJjnJYchUN2RbYPqQjJHPvhIPD1c48MKpdRLw7OSr9lzV-1omeIl1ZIBIW3mpY2eDDsmXy06XVFVtRVtOg8S0rYQRKngcPHSFsfK1CaP4kUx0H3Xx0DOX7PM7ISCTlGoHDBmuteYz9IKfH0cx4iNgyS7G4XWxXbk9rGp2rDG2xp4mTXUuETq-Kq4zyIhZXXAHOLaty0xdpxbQLCMfzf92yFlyiGFzUZlF5ve9GIdkSsVrMy4JdqsB7V8X1CSWOZAEbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 4,
        CategoryName : 'Sức khỏe & Làm đẹp',
        Image: 'https://s3-alpha-sig.figma.com/img/bcb3/7fb9/d58cf0d963a2d73819b49a8e710b1a42?Expires=1568592000&Signature=WvUis~tes1jTKpGp6CduqOT7ClKf7gbwo~2~Ynmff050WZXkgjYrOQhqtHC9hoYpuWH3UY6I1aMYnbsFbcmPGBWTtcUBiwRNA45IpjoY0dKl6nz4iKg0yntrEheuYQQs7qzloJEvDZz7Ea-7x3OeAw6GjeaadVippntHfyteyVN4uBjOdd4wpUyJA~bqQ~M~Dv6AqK2LDjX2bxKv4Kr3Nc3FCTt37ELTqZiF0PajGkYoISE3pNDMZ-kd5Vevbn9MlbscieBuwJaB4L7gC9CTwFmYKxptyCp4f-rF4AWM10pVcpMgFy8kW6W402l3r1QKQ69xS~~nYIq0r16PSE9vlA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 5,
        CategoryName : 'Thể thao & Giải trí',
        Image: 'https://s3-alpha-sig.figma.com/img/eab5/bbe9/1b8f56917ca95eee691a5535abef5d30?Expires=1568592000&Signature=BySxdR46JGObUOWCd01YsUaAJAFFcHp7xvhzWayEUGTlvJ~S-26I39esDQapwXdqdGQ035AfeFm47Ri-w87syZPMEdyZFW87bfBIWj8us~sapy8LzxClEj5nbzCuesRtsIpmxwVnGHng1uLW9gFxXMu1SbrdNXEGJs~PEiqpFNvX6U7Fovza98rQoLmcbNhjcqX5NYAtnhTNIYti4Ws~AqJmUDVLq7TaC~g89EGpZaXQg~9kCWillnRoMOuODivtu9F9anbBXv5sPSjNQ3DX37MKfYotSMvVIFB0VS~-mdFx0iSVeLBh8BqcaTJhgnz8mDKBkxRy08dWgkGmzKNAYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 6,
        CategoryName : 'Giày dép nữ',
        Image: 'https://s3-alpha-sig.figma.com/img/dcc9/f3cc/3315db77af4e6a6a42074f999172de2c?Expires=1568592000&Signature=Bx1kaakpOYwLpyulIT~C09j6XK6VVW3-sfUgPXUSzz07N6dGT9MSexYrVd9tBNUkbUWfAq0vykMMPIxMaEBzOqEWTX4M9obBN5h3OdQOY4r-RbdibkR3wvdAjlcNvf4MOh870P2ueXv~dQio4xuiUGKCbsicN9-VX6GALvV9RPkHpUFR7eOUUjgeks3Y~B13-Ih4FHDj-86HRu3E29okysIa-Bv-ntmZNkDM5MIBQ0yKX1U-pmkUvV39AxQPcEGdyJpSif2RcRZQA3iwYeCioCqHI5UH0Kzs~d142y4Ozt7qZY1lO-zIfexMny82YMBTqGGNHUjMNeqS3o0pzZdakg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 7,
        CategoryName : 'Giày giép nam',
        Image: 'https://s3-alpha-sig.figma.com/img/fd83/2553/ed8ba797ee90860b62689ca097f8d65c?Expires=1568592000&Signature=GUk7k5k3PyxEzT32cZA~qZlYrKuH1cixo4PHhh5AkS0lyrqz18MZgBUt-NDC0~3YmY5zEShn0zF5pKnlng9TFL6zin2qu5LJZz-34sLB18iloH5cee42SR8myO2PC933ZkkuT3MFGEUo5O0vs4FL5JEW6Zad8eMuhWGHU4xqAAiWS4K8IiGwqy~evmiwJSUteg2rdB2q0~VTehzHPOchigjGxcKyJIn7w3HH9SWrT~D19UCZZ7CgJPgxqSjNY09waUD~X~0qPidv~x3xPr98D9uWB6xPjuAo2DhaAqJq0WmVH6bcv-S6nmRy3ksatU5510XEwhnaqWf10IOHbP1DuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 8,
        CategoryName : 'Đồ chơi',
        Image: 'https://s3-alpha-sig.figma.com/img/8713/ef4c/1453f8a2f0687c8326afd214189009aa?Expires=1568592000&Signature=a3ERdaNp~NRmHx7BDP8r9UjyOGFE6wnD6r55l3234emSJm0em-1RcZQo2158S4tYz6Qu8HYTdlfZeE4-E9WZnDzZDEzd2pkAccLZ6AT3OhrxQ92vAAWl51jRPgielBqBwvd9L9-C8-PWqjoS43h6GYnmxfIJXdYxilwrRtf2TQdL624nBDCFJh03snOfHtocaHSP-V9k~WPSMLFygQuN06k0Vghe~aKrAmG62hSRB2lNsrXO~rhVKxcqHYcAncX8fr7nw7G4d8j4bKpBl34~cI2cMIssF04tlov~JulvfsWuW2o7RrLAnHz-GvK8J-IMVr3szBBXoCiGJabsm5PNAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 9,
        CategoryName : 'Điện gia dụng',
        Image: 'https://s3-alpha-sig.figma.com/img/d81f/9d2f/fce16581127a21cf9bc39a73643b841e?Expires=1568592000&Signature=APzn9KxH92q5vfGwmqrtQNKkdkotZon47KsUc2Q8MbLBLDdqMh0DuKfIxMR0pAbcaaz8A9VWTLXug9jueNfa91U1xLdlb~l2J5QZVUWLIT-3TjDT9bWU9h9w4htWpqOly-x4lBBfOrndGthk4zDcsPWji3FWG2EPbG-2LTJ2n4q-I67avOHqYP~mf7jrZO9nmb1twcd0dohcORwIC5j2R9~WLFAQMjw2492WB~y2tsW3~mL6g8W8vXy7S9pU05seGu5NoOgC6Ix64SKc3tMqd9xuWySk6ZG5CDOC6s5VKwCHsEq8WcamHgTLgRtBixdCV8AOFKaIqRHdqmysuP05Dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 10,
        CategoryName : 'Mẹ và bé',
        Image: 'https://s3-alpha-sig.figma.com/img/736c/185d/1c5d3a238bb0370d6e1e529d58ba00d9?Expires=1568592000&Signature=Wy3mUHdCQrgFyIdgHSh30Nme-IuFs9Cc2XIUG~dyQ-HpjH-Qg8sYUBryaDPS~QyicMSbI~u77DOHT~bVGuUgZ3rriYlOmG7fH5nUhBPbqv1CnqJ4BDSAJy2GljoqL0e8uuJRxtyiNvfWZOnYRDlwJ6KtoqXzuUGx6Uoi1BjWn26ybejeWoBkBtI8U9-oWGKdY6PpxSyA38ZD~mVq2n8~Qb3EmQdgJsynrLP~GtMV2z6TdMBwAQ14vHdDzuNwEI2wXjyZaIWHnhGWQpypgZ6NabA-edzU8QJrsxp7lgKEQgKkycfBEd6luKU1JmOW9BgnpBlBtaKufOj1yRLMRos4Rg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 11,
        CategoryName : 'Công nghệ',
        Image: 'https://s3-alpha-sig.figma.com/img/622f/d795/f78b0ee949264a3283da48f021a06467?Expires=1568592000&Signature=aCyiHVjRcSQYvCo0Hcfj1n3I5j8Mu7A2std~BvPU16R2k~lUXSBavIMhFRNgPvcFb-4L9UKAPUE22MEUS1rel8-B3aiDYbicMXyS~hAlMbVL-DAzdpmYKM7c4G1s6cqwNyMhuIIZbfpjXJtsKB02q1oLb5CFc~QvnUGtI9s3O5k3VuBxTAruK4dNVJqdnH5m4MEnfv-HR64wDRi8fhfbxM4Bma4pmrP6vVp4yc2HSbsbbnlWE-n2FjX3khVZFtw4DEV99qIfaBJrFlFmIi60ehYwVKby9MWyQZUkUMjgZ9bhBrNpilWD6ruc4Rlulm7JyJq78stFguFvRVhv8DaWAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 12,
        CategoryName : 'Phụ kiện thời trang',
        Image: 'https://s3-alpha-sig.figma.com/img/90e6/8ec4/11494ad2a6d31b99a6d998b1b96f5fc8?Expires=1568592000&Signature=eWmQQVremPwTV5VAuFMR6ZTAbVMwIJE3CCuTgx-noCtoe9ytK6FP78PvsfAv2577gsAOLj9n-9JI5MzIIncFE8hz4DrbZnOVZ-sBdi-iGsPkiZpzxFsW4fwXNU96UlwtptHIZvbOPVV36SmVDuqvD01HbQp-HaW5iQOuIRT-9MHu5uo7SMXvUN1mOBYCNS~0SrR66VlLGFp-~zk~AG9ElOU5Kzoca8WPo9U9xHK65WZwXi-4mf9LpeouFY-8x5-nSwV7nQqIwYGg3Hdsl9g3Rwddt607T8qgNcJcNygkJnU6btskadez00L8yUm7I9GfQFjMvz~1JBe3dIdHbhfx9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 13,
        CategoryName : 'Nhà cửa',
        Image: 'https://s3-alpha-sig.figma.com/img/215e/7eb6/92bed58a345b39cc5e5d658c9c6949e9?Expires=1568592000&Signature=aQ-mjtnrWFbkEQGdaXsqMz-Iw6iumhh8YAfHFbSwdsogXpdifEqR3HxlA8nlRQW5zo7qQJOTefOE9Ie694pw4amGP1Df8ABwEjMJicAqIJST5O2MKYUle-oOWC4Wm5lQ15c5DsiGsTMt-GqD41yNkOKWjKAzvWxLh2uh8m5a9BE4s0L4XxRzxA9cxlRdShq7-LtCU~gX2j0U-9kBERo72mREyaYW1eX4p08-zTsesk4TOiDpwJkwYo9NnQQUtoofE9Hrvd-uGhZ9jodtkRCoY-htM8ZCslB6Vu5WUaLDNwbP6QrDXR-0zoXQmyNzWcnBhivhp9IXWszY7In8aYFY5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        CategoryID: 14,
        CategoryName : 'Đời sống Gia dụng',
        Image: 'https://s3-alpha-sig.figma.com/img/cfe3/dcaf/626d726ba3316a905f53ad53383766f8?Expires=1568592000&Signature=GpsNmuUXNd7ZrVevHyZ9am2ZjktCQqpZms-CqExZpV4-Pf~zyLtGmbkeksl9qs2qV-DZuIeu9J3KqQBwOJKoqs-RB1QUeApSEPesbaNHMtoLc-iDBEN-9UB767BSPavIMA1uq0SISzQWh0xIzT~vN3J0vsqNAn8bV4~BmtQfS-gJjjEBPfaA88AXdCOElk5-OKWEXg5ZfBNIajMABhhCFuHwyfmRA4U1DNCLYu1grWwj1LphghLru43ZmAuQ5NWGKFNRyUAAD23os~fwlpBDwW4yUizovgylsxaNvkg~gdjhqom0JsQg97sD37tKNfgFAWTlXitnzqVjHOGeufhqBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
]
export {CategoryData}