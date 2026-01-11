// Configuration for all ceramic pieces
// To add new images: upload to the piece's folder and add the filename to the images array

const piecesConfig = {
    'piece-1': {
        id: 'piece-1',
        title: 'Floating Blue Jar 2025',
        shortTitle: 'Floating Blue Jar',
        date: '2025-01-15',
        dateDisplay: 'January 15, 2025',
        material: 'White stoneware',
        glaze: 'Floating Blue Cone 06 glaze',
        location: 'Callanwolde, Atlanta',
        images: [
            'img1.jpeg',
            'img2.jpeg',
            'img3.jpeg',
            'img4.jpeg'
        ],
        altTexts: [
            'Handmade ceramic floating blue jar - white stoneware pottery Atlanta',
            'Floating blue ceramic jar side view - handmade pottery detail',
            'White stoneware jar with floating blue glaze - ceramic pottery closeup',
            'Handmade ceramic jar back view - functional pottery vessel'
        ],
        seo: {
            metaDescription: 'Floating Blue Jar 2025 - handmade white stoneware ceramic jar with floating blue cone 06 glaze. Functional pottery by Atlanta ceramic artist Kavin Lam.',
            keywords: 'ceramic jar, pottery jar, white stoneware, floating blue glaze, handmade ceramics Atlanta, functional pottery',
            ogTitle: 'Floating Blue Jar - Handmade Ceramic Pottery',
            ogDescription: 'Handmade white stoneware ceramic jar with floating blue glaze by Atlanta ceramic artist Kavin Lam.'
        },
        schema: {
            artMedium: 'White stoneware with Floating Blue Cone 06 glaze',
            blogDescription: 'A handmade white stoneware jar with floating blue cone 06 glaze, exploring the interplay of form and surface in functional ceramic pottery.'
        },
        detailsHtml: `
            <h2>About This Piece</h2>
            <p>This ceramic jar emerged from an exploration of simple forms and reactive glazes. Wheel-thrown from white stoneware clay, the vessel features a gentle curve that tapers toward the top—a shape that feels both grounded and light.</p>

            <h2>The Glaze</h2>
            <p>The Floating Blue glaze is a cone 06 glaze that moves unpredictably during firing. The blue breaks differently depending on thickness and clay body, creating variations from deep cobalt to pale sky blue. On this white stoneware, the glaze pools in recesses and thins on edges, revealing the clay beneath.</p>

            <p>This glaze behavior is why each firing produces unique results. The pottery comes out different every time—even when the application technique stays consistent. Floating blue is one of the few cone 06 glazes I have access to that brings this variabilty. That unpredictability is part of working with ceramic glazes, especially at lower temperatures like cone 06.</p>

            <h2>Form and Function</h2>
            <p>The jar works as a functional vessel—for holding dried goods, as a vase, or simply as a sculptural object. The opening is wide enough for practical use but maintains a balanced proportion with the body. It's meant to have form and function.</p>

            <h2>Making Process</h2>
            <p>After throwing on the wheel, the piece was trimmed to refine the foot and wall thickness. The white stoneware clay body allows the glaze color to stay true without the iron content of darker clays interfering. Multiple coats of the floating blue glaze were applied before the cone 06 firing at Callanwolde in Atlanta.</p>

            <p>The entire ceramic process—from throwing to final firing—took approximately four weeks, allowing for proper drying times between each stage.</p>
        `
    },
    'piece-2': {
        id: 'piece-2',
        title: 'Shino Water Pitchers 2025',
        shortTitle: 'Shino Water Pitchers',
        date: '2025-02-01',
        dateDisplay: 'February 1, 2025',
        material: 'Brown stoneware with iron spotting',
        glaze: 'Traditional shino glaze',
        location: 'Callanwolde, Atlanta',
        images: [
            'img1.jpeg',
            'img2.jpeg',
            'img3.jpeg',
            'img4.jpeg'
        ],
        altTexts: [
            'Handmade shino water pitchers - brown stoneware ceramic pottery Atlanta',
            'Ceramic water pitchers with iron spotting - handmade pottery detail',
            'Brown stoneware pitchers shino glaze - functional ceramic pottery',
            'Handmade ceramic pitchers closeup - Atlanta pottery artist'
        ],
        seo: {
            metaDescription: 'Shino Water Pitchers 2025 - handmade brown stoneware ceramic pitchers with iron spotting and shino glaze. Functional pottery by Atlanta ceramic artist.',
            keywords: 'ceramic pitchers, pottery pitchers, shino glaze, brown stoneware, handmade ceramics Atlanta, functional pottery, water pitchers',
            ogTitle: 'Shino Water Pitchers - Handmade Ceramic Pottery',
            ogDescription: 'Handmade brown stoneware ceramic pitchers with shino glaze by Atlanta ceramic artist Kavin Lam.'
        },
        schema: {
            artMedium: 'Brown stoneware with iron spotting and shino glaze',
            blogDescription: 'Handmade brown stoneware water pitchers with traditional shino glaze and natural iron spotting, crafted for daily use.'
        },
        detailsHtml: `
            <h2>Functional Pottery for Daily Use</h2>
            <p>These water pitchers are designed for actual use—pouring water, serving beverages, or holding flowers. Wheel-thrown from brown stoneware clay, each pitcher has a bowed shoulder and narrowed neck. </p>

            <h2>Shino Glaze Tradition</h2>
            <p>Shino is one of the classic Japanese pottery glazes, traditionally wood-fired to high temperatures. This version was fired to cone 10 at Callanwolde in Atlanta. The glaze produces glossy finish surfaces with natural variations in color—from cream to orange to deep brown--and sometimes red if you're lucky.</p>

            <p>The iron spotting visible on these ceramic pitchers comes from the brown stoneware clay body. The iron in the clay migrates through the shino glaze during firing, creating the characteristic orange and brown spots. This interaction between clay and glaze is something you can't fully control or replicate—each piece develops its own pattern.</p>

            <h2>The Making</h2>
            <p>Each pitcher was thrown individually on the wheel, then trimmed to refine the shape and add a foot ring. Handles were pulled from the same brown stoneware and attached while the clay was still workable. After the first bisque firing, two layers of shino glaze were applied before the final high-fire.</p>

            <p>The pitchers were fired together in the same kiln load, yet they came out slightly different. Variations in glaze thickness, kiln position, and flame path all contribute to the final surface. Depending on the kiln position, the exact temperature will be different leading to different glaze finising. This is the nature of handmade pottery—consistency in process, variation in result.</p>

            <h2>Design Intent</h2>
            <p>The form is straightforward: larger body for volume and narrowed neck for control. No unnecessary decoration. The beauty comes from the glaze surface, the iron spotting, and the simple functional shape. These are ceramic vessels meant to be used regularly and displayed.</p>
        `
    },
    'piece-3': {
        id: 'piece-3',
        title: 'Alberta Lidded Jar',
        shortTitle: 'Alberta Lidded Jar',
        date: '2025-02-20',
        dateDisplay: 'February 20, 2025',
        material: 'Brown stoneware',
        glaze: 'Cone 10 Alberta slip glaze',
        location: 'Callanwolde, Atlanta',
        images: [
            'img1.jpeg',
            'img2.jpeg',
            'img3.jpeg',
            'img4.jpeg'
        ],
        altTexts: [
            'Handmade Alberta lidded jar - brown stoneware ceramic pottery Atlanta',
            'Ceramic jar with lid cone 10 Alberta glaze - handmade pottery',
            'Brown stoneware lidded jar detail - functional ceramic pottery',
            'Handmade pottery jar with lid - Atlanta ceramic artist'
        ],
        seo: {
            metaDescription: 'Alberta Lidded Jar 2025 - handmade brown stoneware ceramic jar with cone 10 Alberta glaze. Functional pottery with lid by Atlanta ceramic artist.',
            keywords: 'ceramic jar with lid, pottery jar, Alberta glaze, brown stoneware, handmade ceramics Atlanta, functional pottery, lidded jar',
            ogTitle: 'Alberta Lidded Jar - Handmade Ceramic Pottery',
            ogDescription: 'Handmade brown stoneware ceramic jar with cone 10 Alberta glaze by Atlanta ceramic artist Kavin Lam.'
        },
        schema: {
            artMedium: 'Brown stoneware with Cone 10 Alberta slip glaze',
            blogDescription: 'A handmade brown stoneware lidded jar with cone 10 Alberta slip glaze, combining high-fire ceramics with functional design.'
        },
        detailsHtml: `
            <h2>High-Fire Stoneware</h2>
            <p>This lidded jar represents the kind of functional pottery that sits at the intersection of utility and craft. Thrown on the wheel from brown stoneware, then fired to cone 10 (around 2381°F)—a temperature where clay and glaze truly fuse into a vitrified ceramic body.</p>

            <h2>Alberta Slip Glaze</h2>
            <p>The Alberta slip is thick yellow/green matte glaze. When used as a glaze at high temperatures, it produces warm brown and tan surfaces with subtle variations. The glaze breaks lighter on edges and pools darker in recesses, creating depth across the form.</p>

            <p>This is a slip glaze rather than a typical ceramic glaze—essentially a clay that melts and seals at high fire. The result is an earthy, understated surface that complements the brown stoneware clay body. The color palette stays in the range of natural earth tones without bright colors or heavy decoration.</p>

            <h2>The Lid</h2>
            <p>Fitting a pottery lid properly requires careful attention during throwing and trimming. The lid for this jar was thrown separately, then trimmed to match the gallery (the recessed ring where the lid sits). The lid should be easy to lift with the large overhang.</p>

            <p>The fit is snug to sit securely while remaining easy to remove. This is achieved through throwing a larger lid and trimming down once leather hard.</p>

            <h2>Intended Use</h2>
            <p>Lidded jars are versatile functional ceramics. This piece could hold dry goods in a kitchen, sit on a dresser for small items, or simply exist as a sculptural object. The cone 10 firing makes it fully vitrified and durable—these are pots meant to last and be used.</p>

            <h2>Making Notes</h2>
            <p>The jar body and lid were thrown on the same day, allowing me to match the clay consistency and throwing rhythm. After bisque firing, the Alberta slip was applied by dipping—submerging the piece in a bucket of glaze for even coverage. The high-fire cone 10 kiln at Callanwolde in Atlanta reached temperature over a long firing cycle.</p>

            <p>The entire process from wet clay to finished piece took roughly four weeks, accounting for drying time, bisque firing, glazing, and final firing schedules.</p>
        `
    },
    'piece-4': {
        id: 'piece-4',
        title: 'White Jar with Blue Dot 2025',
        shortTitle: 'White Jar with Blue Dot',
        date: '2025-12-23',
        dateDisplay: 'December 23, 2025',
        material: 'Brown stoneware',
        glaze: 'Stan\'s White and Blue Cone 06 glaze',
        location: 'Atlanta',
        images: [
            'img1.jpeg',
            'img2.jpeg',
            'img3.jpeg',
            'img4.jpeg',
            'img5.jpeg'
        ],
        altTexts: [
            'White ceramic jar with blue dots - brown stoneware pottery inspired by Chinese porcelain Atlanta',
            'Blue dot ceramic jar side view - handmade pottery detail',
            'Brown stoneware jar with white and blue glaze - ceramic pottery closeup',
            'Handmade ceramic jar alternate view - functional pottery vessel',
            'White jar with blue dot top view - handmade ceramic pottery'
        ],
        seo: {
            metaDescription: 'White Jar with Blue Dot 2025 - handmade brown stoneware ceramic jar with white and blue cone 06 glaze. Inspired by Chinese porcelain, functional pottery by Atlanta ceramic artist Kavin Lam.',
            keywords: 'ceramic jar, pottery jar, brown stoneware, blue dot glaze, Chinese porcelain inspired, handmade ceramics Atlanta, functional pottery',
            ogTitle: 'White Jar with Blue Dot - Handmade Ceramic Pottery',
            ogDescription: 'Handmade brown stoneware ceramic jar with white and blue glaze, inspired by Chinese porcelain by Atlanta ceramic artist Kavin Lam.'
        },
        schema: {
            artMedium: 'Brown stoneware with Stan\'s White and Blue Cone 06 glaze',
            blogDescription: 'A handmade brown stoneware jar with white and blue glazes, inspired by Chinese porcelain traditions and family heritage.'
        },
        detailsHtml: `
            <h2>About This Piece</h2>
            <p>This jar bridges two ceramic traditions—the blue and white porcelain I grew up seeing in my family, and the contemporary stoneware practice I work in today. Rather than replicating Chinese porcelain, this piece translates its visual language onto brown stoneware, creating something that honors both heritage and current making.</p>

            <h2>Cultural Connection</h2>
            <p>Blue and white porcelain has been part of Chinese ceramic tradition for centuries, and it was a familiar presence in my family home. Those pieces carried a particular aesthetic—white backgrounds with blue imagery that ranged from landscapes to abstract patterns. This jar takes that visual memory and applies it to my current material palette.</p>

            <p>Working with brown stoneware instead of white porcelain changes the piece fundamentally. The clay body is earthier, more textured. The white glaze sits on top rather than being the clay itself. This creates a different relationship between form and surface.</p>

            <h2>The Glaze Application</h2>
            <p>The piece is first dipped in Stan's white glaze to create the base layer. Then, the bowed sides are dipped in blue glaze, creating the spotted effect where the two glazes overlap. This isn't painted decoration—it's the result of how the glazes interact during the dipping process.</p>

            <p>The blue spots appear where the jar's curved form creates natural dip lines. Each angle changes how much blue glaze adheres to the white base. The process is controlled but not precise—the exact pattern is determined by the form's geometry and how the glaze flows.</p>

            <h2>Form and Function</h2>
            <p>The jar's rounded shape with a slightly tapered opening serves practical use—as a storage vessel, vase, or simply as a sculptural object. The form is straightforward, allowing the glaze interaction to be the visual focus. The brown stoneware foot remains exposed, grounding the piece in its material reality.</p>

            <h2>Making Process</h2>
            <p>Wheel-thrown from brown stoneware clay and trimmed to refine the wall thickness and foot. After bisque firing, the piece was dipped first in white glaze, then strategically dipped in blue to create the overlapping spots. The cone 06 firing temperature allows both Stan's white and blue glazes to mature properly, creating the smooth, glassy surface.</p>

            <p>This lower firing temperature (cone 06) differs from traditional high-fire porcelain but suits the brown stoneware body and these specific glazes. The entire process from throwing to final firing took approximately four weeks.</p>
        `
    }
};

// Gallery configuration
const galleryConfig = {
    'piece-1': {
        displayTitle: 'Floating Blue Jar 2025',
        subtitle: 'White stoneware, 2025'
    },
    'piece-2': {
        displayTitle: 'Shino Water Pitchers 2025',
        subtitle: 'Brown stoneware, 2025'
    },
    'piece-3': {
        displayTitle: 'Alberta Lidded Jar',
        subtitle: 'Brown stoneware, 2025'
    },
    'piece-4': {
        displayTitle: 'White Jar with Blue Dot 2025',
        subtitle: 'Brown stoneware, 2025'
    }
};

// Navigation helper
const pieceOrder = ['piece-1', 'piece-2', 'piece-3', 'piece-4'];

function getNextPiece(currentId) {
    const currentIndex = pieceOrder.indexOf(currentId);
    return currentIndex < pieceOrder.length - 1 ? pieceOrder[currentIndex + 1] : null;
}

function getPreviousPiece(currentId) {
    const currentIndex = pieceOrder.indexOf(currentId);
    return currentIndex > 0 ? pieceOrder[currentIndex - 1] : null;
}
