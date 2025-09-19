import Image from "next/image";
import image1 from "@/public/image/victory-park.png";
import image2 from "@/public/image/fair-park.png";
import image3 from "@/public/image/nrg-stadium.png";

export default function LandmarksAndEntertainmentDistricts() {
  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-14 md:py-[100px] text-center space-y-20">
      <div className="text-center">
        <h1 className="text-[48px] font-semibold leading-[130%]">
          Landmarks & Entertainment Districts
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore the most iconic venues and cultural hubs in Dallas and Houston
          from sports <br /> stadiums to historic fairgrounds and vibrant urban
          districts.
        </p>
      </div>

      <div className="space-y-10">
        {/* Victory Park, Dallas */}
        <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-8 bg-[#F6F8FA] rounded-xl gap-5">
          <Image
            src={image1}
            alt="Victory Park, Dallas"
            width={384}
            height={570}
            className="rounded-lg"
          />
          <div className="w-full text-start space-y-6">
            <h1 className="text-3xl font-semibold ">Victory Park, Dallas</h1>
            <hr className="text-[#D2D2D5]" />
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="space-y-6 flex-1">
                {/* Victory Park: Entertainment & Landmarks */}
                <div>
                  <h2 className="text-xl font-semibold ">
                    Victory Park: Entertainment & Landmarks
                  </h2>
                  <ul className="list-inside list-decimal space-y-2 text-[#4A4C56]">
                    <li>
                      The Perot Museum of Nature & Science is nearby, with
                      interactive science, nature, and environment exhibits.
                    </li>
                    <li>
                      The Perot Museum of Nature & Science is nearby, with
                      interactive science, nature, and environment exhibits.
                    </li>
                  </ul>
                </div>
                {/* Amenities & Urban Design */}
                <div>
                  <h2 className="text-xl font-semibold ">
                    Amenities & Urban Design
                  </h2>
                  <ul className="list-inside list-decimal space-y-2 text-[#4A4C56]">
                    <li>
                      It’s built out to be walkable, with street-level retail,
                      outdoor seating, plazas, landscaping.
                    </li>
                    <li>
                      The Katy Trail is nearby — a multi-use trail for
                      walking/jogging/biking.
                    </li>
                    <li>
                      The Victory Media Network: large LED screens,
                      digital/interactive displays in public plazas.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Retail / Dining / Bars */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold ">
                  Retail / Dining / Bars
                </h2>
                <ul className="list-inside list-decimal space-y-2 text-[#4A4C56]">
                  <li>
                    Restaurants, bars, and local shops are lined along the
                    streets. It’s a lively area with high-end dining, sidewalk
                    cafes, bars.
                  </li>
                  <li>
                    There is a food hall called Victory Social in One Victory
                    Park (2323 Victory Ave) — about 12,000 sq ft with several
                    concepts (fast casual to full service).
                  </li>
                  <li>Specific spots:</li>
                  <ul className="list-inside list-disc space-y-2 pl-3 text-[#4A4C56]">
                    <li>Jinya Ramen Bar</li>
                    <li>Billy Can Can (saloon-style dining)</li>
                    <li>Hero, Cook Hall, Mesero among others</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Fair Park, Dallas */}
        <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-8 bg-[#F6F8FA] rounded-xl gap-5">
          <Image
            src={image2}
            alt="Fair Park, Dallas"
            width={384}
            height={570}
            className="rounded-lg"
          />
          <div className="w-full text-start space-y-6">
            <h1 className="text-3xl font-semibold ">Fair Park, Dallas</h1>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="space-y-6 flex-1">
                {/* Signature Events */}
                <div>
                  <h2 className="text-xl font-semibold">Signature Events</h2>
                  <ul className="list-inside list-decimal space-y-2 text-[#4A4C56]">
                    <li>
                      State Fair of Texas — the biggest annual event at Fair
                      Park, held every fall (late September–October). It
                      features the midway, rides, livestock shows, food (like
                      the famous Fletcher’s Corny Dogs), and Big Tex, the 55-ft
                      cowboy mascot.
                    </li>
                  </ul>
                </div>
                {/* Architecture & History */}
                <div>
                  <h2 className="text-xl font-semibold ">
                    Architecture & History
                  </h2>
                  <ul className="list-inside list-decimal space-y-2 text-[#4A4C56]">
                    <li>
                      Known for one of the largest collections of 1930s Art Deco
                      architecture in the U.S.
                    </li>
                    <li>Designated a National Historic Landmark in 1986.</li>
                    <li>
                      Originally developed for the 1936 Texas Centennial
                      Exposition, many original buildings are still standing.
                    </li>
                  </ul>
                </div>
                {/* Other Uses */}
                <div>
                  <h2 className="text-xl font-semibold ">Other Uses</h2>
                  <ul className="list-inside list-decimal space-y-2 text-[#4A4C56]">
                    <li>
                      Hosts cultural festivals, expos, concerts, and sporting
                      events year-round.
                    </li>
                    <li>
                      Surrounding area includes planned redevelopment projects,
                      such as more green spaces, restaurants, and improved
                      public transit access.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Attractions & Venues */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold ">Attractions & Venues</h2>
                <ul className="list-inside list-decimal space-y-2 text-[#4A4C56]">
                  <li>
                    Cotton Bowl Stadium — a historic 92,000-seat stadium, home
                    to the Red River Rivalry (Texas vs. Oklahoma football) and
                    major concerts.
                  </li>
                  <li>
                    Music Hall at Fair Park — hosts Broadway shows, concerts,
                    and Dallas Summer Musicals.
                  </li>
                  <li>
                    African American Museum of Dallas — focusing on African
                    American art, culture, and history.
                  </li>
                  <li>
                    Children’s Aquarium at Fair Park and Texas Discovery
                    Gardens.
                  </li>
                  <li>
                    Hall of State — built for the 1936 Texas Centennial
                    Exposition, a showcase of Texas history.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* NRG Stadium, Houston */}
        <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-8 bg-[#F6F8FA] rounded-xl gap-5">
          <Image
            src={image3}
            alt="NRG Stadium, Houston"
            width={384}
            height={570}
            className="rounded-lg"
          />
          <div className="w-full text-start space-y-6">
            <h1 className="text-3xl font-semibold ">NRG Stadium, Houston</h1>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="space-y-6 flex-1">
                {/* Major Uses */}
                <div>
                  <h2 className="text-xl font-semibold ">Major Uses</h2>
                  <ul className="list-inside list-decimal space-y-2 text-[#4A4C56]">
                    <li>Houston Texans (NFL).</li>
                    <li>
                      Houston Livestock Show and Rodeo (one of the world’s
                      largest rodeos).
                    </li>
                  </ul>
                </div>

                {/* Past & Recurring Events */}
                <div>
                  <h2 className="text-xl font-semibold ">
                    Past & Recurring Events
                  </h2>
                  <ul className="list-inside list-decimal space-y-2 text-[#4A4C56]">
                    <li>Two Super Bowls (XXXVIII in 2004, LI in 2017).</li>
                    <li>NCAA Final Four basketball tournaments.</li>
                    <li>
                      International soccer matches (including Copa América and
                      Gold Cup).
                    </li>
                    <li>
                      Large concerts (Beyoncé, Taylor Swift, George Strait,
                      etc.).
                    </li>
                  </ul>
                </div>
              </div>
              {/* Highlights */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold ">Highlights</h2>
                <ul className="list-inside list-decimal space-y-2 text-[#4A4C56]">
                  <li>First NFL stadium with a fully retractable roof.</li>
                  <li>
                    Part of Houston’s sports & entertainment hub, with
                    tailgating traditions and huge event turnout.
                  </li>
                  <li>
                    Adjacent to the historic Astrodome, the world’s first domed
                    stadium.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
