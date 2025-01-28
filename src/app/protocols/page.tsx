import React from "react";

const HealthIssueTable: React.FC = () => {
  return (
    <div className="p-4">
      <div className="relative">
        <table className="table-auto border-collapse border border-gray-500 w-full table-fixed">
          <thead className="bg-orange-200">
            <tr>
              <th className="border border-gray-500 p-2 w-[15%] align-top">
                Health Issue
              </th>
              <th className="border border-gray-500 p-2 w-[55%] align-top">
                Decoctions
              </th>
              <th className="border border-gray-500 p-2 w-[30%] align-top">
                Millets
              </th>
            </tr>
          </thead>
        </table>
        <div className="max-h-[calc(100vh-300px)] overflow-y-auto border border-gray-500">
          <table className="table-auto border-collapse border border-gray-500 w-full table-fixed">
            <tbody>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Dialysis</li>
                    <li className="mt-4">Albumin Urea</li>
                    <li className="mt-4">Gout</li>
                    <li className="mt-4">Uric acid</li>
                    <li className="mt-4">Urethral structure</li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Nyctanthes arbor-tristis, Coriander, Bryophyllum pinnatum,
                      Banana stem (organic) Boerhavia diffusa, Abutilon indicum
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 w-[30%] align-top">
                  <ul className="p-2">
                    <li>Little millet - 3 days</li>
                    <li>Kodo millet - 3 days</li>
                    <li>Barnyard millet - 3 days</li>
                    <li>Foxtail millet - 1 day</li>
                    <li>Brown top millet - 1 day</li>
                  </ul>
                  <p className="border-t border-gray-500 p-2">
                    Best way to consume millets is in the form of fermented
                    porridge for 9 weeks (For Dialysis patients)
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  Diabetes
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Tinospora cordifolia, Jamun leaves, Ivy gourd leaves,
                      Mint, Drumstick leaves, Abutilon indicum, Fenugreek
                      leaves, Coriander leaves
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Little millet - 2 days</li>
                    <li>Kodo millet - 2 days</li>
                    <li>Barnyard millet - 2 days</li>
                    <li>Foxtail millet - 2 day</li>
                    <li>Brown top millet - 2 day</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Thyroid</li>
                    <br />
                    <li>P.C.O.D</li>
                    <br />
                    <li>Hormonal Imbalance</li>
                    <br />
                    <li>Endometriosis</li>
                    <br />
                    <li>Fibroid/ Fibro adenoma</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div className="">
                          Drumstick leaves, Tender tamarind leaves, Betel leaves
                          (Remove the petiole), Pongamia pinnata, Roselle,
                          Abutilon indicum, Tinospora cordifolia
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Little millet - 2 days</li>
                          <li>Kodo millet - 2 day</li>
                          <li>Barnyard millet - 2 day</li>
                          <li>Foxtail millet - 2 day</li>
                          <li>Brown top millet - 2 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Oils:</strong> (Al least 3 types of oils)
                          Coconut oil/ Safflower oil/ Peanut oil/ Sesame oil/
                          Niger seed oil.
                        </li>
                        <br />
                        <li>
                          Consume all above mentioned oils one week each and
                          repeat the cycle. Take 2 to 3 spoons of oil and
                          maintain gap of 30 mins between oils and decoctions.
                        </li>{" "}
                        <br />
                        <li>
                          {" "}
                          Source of oils should be strictly from bull driven
                          wooden Ghana's Oils should be stored in glass or
                          porcelain containers.
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>B.P</li>
                    <br />
                    <li>Heart related</li>
                    <br />
                    <li>Cholesterol</li>
                    <br />
                    <li>Triglycerides</li>
                    <br />
                    <li>Angina</li>
                    <br />
                    <li>Pectoris</li>
                  </ul>
                </td>

                <td colSpan={2} className="align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div className="">
                          Holy basil, Aegle marmelos, Coriander, Sarpagandha,
                          Opuntia dilleni, Abutilon indicum leaves, Tinospora
                          cordifolia
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Little millet - 3 days</li>
                          <li>Kodo millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                          <li>Foxtail millet - 1 day</li>
                          <li>Brown top millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Juices:</strong> Salad cucumber/ Bottle gourd/
                          Ash gourd.
                        </li>
                        <br />
                        <li>
                          Consume above mentioned juices one week each and
                          repeat the cycle for 9 weeks. Juices should be taken
                          on empty stomach and maintain gap 30mins between
                          decoctions and juices.
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Obesity / Weight loss</li>
                    <br />
                    <li>Hernia</li>
                    <br />
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Peepal, Betel leaves (Remove the petiole), Cumin seeds
                      Bermuda grass, Wild date palm leaves, organic turmeric
                      powder or turmeric bulb.
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Little millet - 3 days</li>
                    <li>Kodo millet - 3 days</li>
                    <li>Barnyard millet - 1 days</li>
                    <li>Foxtail millet - 1 day</li>
                    <li>Brown top millet - 1 day</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Weight gain (Underweight)</li>
                  </ul>
                </td>

                <td colSpan={2} className="align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div className="">
                          Mustard seeds, Fenugreek seeds, Cumin seeds, Banana
                          stem, Abution indicum
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Little millet - 3 days</li>
                          <li>Kodo millet - 3 day</li>
                          <li>Barnyard millet - 1 day</li>
                          <li>Foxtail millet - 1 day</li>
                          <li>Brown top millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Oils:</strong> Safflower oil/ Niger seed oil/
                          Peanut oil
                        </li>
                        <br />
                        <li>
                          Consume all above mentioned oils one week each and
                          repeat the cycle. Take 2 to 3 spoons of oil and
                          maintain gap of 30 mins between oils and decoctions
                        </li>
                        <br />
                        <li>
                          Source of oils should be strictly from bull driven
                          wooden Ghana's Oils should be stored in glass or
                          porcelain containers.
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="border border-gray-500 p-2 w-[15%] align-top"
                >
                  <ul>
                    <li>
                      Healthy people can take Proso millet 1-day, Great millet
                      1- day along with positive grains.
                    </li>
                    <br />
                    <li>
                      Sprouted legumes such as green gram, Bengal gram, cowpea,
                      groundnuts should be taken each variety per week. Sprouts
                      should first be steamed for 4to/minutes and then be
                      tempered.
                    </li>
                    <br />
                    <li>
                      Just two tea spoonsful of one type of steamed and tempered
                      sprouts should be taken once a week along with one
                      teaspoon of fenugreek/methi sprouts.
                    </li>
                    <br />
                    <li>
                      That means every week the type of legume used for
                      sprouting changes, but fenugreek seed sprouts remains
                      constant.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Asthma</li>
                    <br />
                    <li>T.B.</li>
                    <br />
                    <li>Pneumonia</li>
                    <br />
                    <li>Sinusitis</li>
                    <br />
                    <li>Respiratory related issues</li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Organic turmeric powder or turmeric root, Organic ginger,
                      Ruta graveolens, Neem, Curry leaves, Bermuda grass,
                      Abutilon indicum, Tinospora cordifolia, Japanese Mugwort
                      leaves
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Little millet - 1 days</li>
                    <li>Kodo millet - 1 days</li>
                    <li>Barnyard millet - 1 days</li>
                    <li>Foxtail millet - 2 day</li>
                    <li>Brown top millet - 2 day</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Gastric Problems</li>
                    <br />
                    <li>Acidity</li>
                    <br />
                    <li>
                      GERD (Gastro esophageal reflex disease)/ Acid reflux
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Betel leaves (Remove the patiole). Fenugreek leaves,
                      Pongamia pinnata leaves, Cumin seeds, Senna leaves
                      Abutilon indicum
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 w-[30%] align-top">
                  <ul className="p-2">
                    <li>Little millet - 2 days</li>
                    <li>Kodo millet - 2 days</li>
                    <li>Barnyard millet - 2 days</li>
                    <li>Foxtail millet - 2 day</li>
                    <li>Brown top millet - 2 day</li>
                  </ul>
                  <p className="border-t border-gray-500 p-2">
                    The best way to consume millets in the form of fermented
                    porridge for 5 to 6 weeks
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Parkinson's</li>
                    <br />
                    <li>Alzheimer's</li>
                    <br />
                    <li>Fits</li>
                    <br />
                    <li>Paralysis</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Guava leaves, Nyctanthes arbor-tristis, Peepal, Ruta
                          graveolens, Neem, Cinnamon sticks, Organic turmeric
                          powder or turmeric bulb, Abutilon indicum leaves
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Foxtail millet - 3 day</li>
                          <li>Brown top millet - 3 day</li>
                          <li>Little millet - 1 days</li>
                          <li>Kodo millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Oils:</strong> Niger seed oil/ Coconut oil/
                          Peanut oil/ Safflower oil
                        </li>
                        <br />
                        <li>
                          Consume all above mentioned oils one week each and
                          repeat the cycle. Take 2 to 3 spoons of oil and
                          maintain gap of 30 mins between oils and decoctions
                        </li>{" "}
                        <br />
                        <li>
                          {" "}
                          Source of oils should be strictly from bull driven
                          wooden Ghana's Oils should be stored in glass or
                          porcelain containers.
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Kidney stones</li>
                    <br />
                    <li>Gall bladder stones</li>
                    <br />
                    <li>Pancreas stones</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Coriander leaves, Boerhavia diffusa, Bryophyllum
                          pinnatum, Banana stem, Pongamia pinnata, Abutilon
                          indicum
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="w-35-29">
                        <ul className="p-2">
                          <li>Foxtail millet - 3 day</li>
                          <li>Brown top millet - 3 day</li>
                          <li>Little millet - 1 days</li>
                          <li>Kodo millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                        <p className="border-t border-gray-500 p-2">
                          Best way to consume millets is in the form of
                          fermented porridge for 9 weeks (For Dialysis patients)
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Oils:</strong> Niger seed oil/ Coconut oil/
                          Peanut oil/ Safflower oil
                        </li>
                        <br />
                        <li>
                          Consume all above mentioned oils one week each and
                          repeat the cycle. Take 2 to 3 spoons of oil and
                          maintain gap of 30 mins between oils and decoctions
                        </li>{" "}
                        <br />
                        <li>
                          {" "}
                          Source of oils should be strictly from bull driven
                          wooden Ghana's Oils should be stored in glass or
                          porcelain containers.
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Eye problems</li>
                    <br />
                    <li>Glaucoma</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Dill weed leaves, Drumstick leaves, Mint leaves, Curry
                          leaves, Betel leaves ( Remove the petiole), Ruta
                          graveolens
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Foxtail millet - 3 day</li>
                          <li>Brown top millet - 3 day</li>
                          <li>Little millet - 1 days</li>
                          <li>Kodo millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Juices:</strong> Carrot/ Knol khol/ Radish (
                          Can take with lemon juice, palm jaggery or with salt/
                          pepper powder )
                        </li>
                        <br />
                        <li>
                          Consume above mentioned juices one week each and
                          repeat the cycle for 9 weeks. Juices should be taken
                          on empty stomach and maintain gap 30 mins between
                          decoctions and juices.
                        </li>{" "}
                        <br />
                        <li>
                          <strong>Plant based Milk:</strong> Take weekly 2 days
                          coconut milk, 2 days sesame milk, 2 days pearl millet
                          milk.
                        </li>
                        <br />
                        <li>
                          Daily see orange colour sun during sunrise and sunset
                          for 5 mins.
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Liver Cleaning</li>
                    <br />
                    <li>Kidney Cleaning</li>
                    <br />
                    <li>Pancreas</li>
                    <br />
                    <li>Hepatitis A and B</li>
                    <br />
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Ruta graveolens, Fenugreek seeds or leaves, Bryophyllum
                      pinnatum, Boerhavia diffusa, Phyllanthus niruri, Abutilon
                      indicum
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Barnyard millet - 3 days</li>
                    <li>Little millet - 1 days</li>
                    <li>Kodo millet - 1 days</li>
                    <li>Foxtail millet - 1 day</li>
                    <li>Brown top millet - 1 day</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Nerve problems</li>
                    <br />
                    <li>Vertigo and Migraine</li>
                    <br />
                    <li>Sweat in Palms/ Sweat in Foot soles</li>
                    <br />
                    <li>Snoring</li>
                    <br />
                    <li>Stammering</li>
                    <br />
                    <li>Hearing Problems</li>
                    <br />
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Bermuda grass, Guava leaves, Nyctanthes arbor-tristis,
                      Ruta graveolens, Organic turmeric powder or turmeric bulb,
                      Abutilon indicum
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Foxtail millet - 3 day</li>
                    <li>Brown top millet - 3 day</li>
                    <li>Barnyard millet - 1 days</li>
                    <li>Little millet - 1 days</li>
                    <li>Kodo millet - 1 days</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="border border-gray-500 p-2 w-[15%] align-top"
                >
                  <ul>
                    <li>
                      <strong>Oils:</strong> Coconut oil/ Sesame oil/ Niger seed
                      oil Consume all above mentioned oils one week each and
                      repeat the cycle. Take 2 to 3 spoons of oil and maintain
                      gap of 30 mins between oils and decoctions
                    </li>
                    <br />
                    <li>
                      Source of oils should be strictly from bull driven wooden
                      Ghana's Oils should be stored in glass or porcelain
                      containers.
                    </li>
                    <br />
                    <li>
                      <strong>Migraine:</strong>
                      Take a spoon of sesame seeds and fry them on a small
                      flame, until the sesame seeds pop(sound) and change color,
                      on the iron pan. Let them cool down. Chew them till you
                      feel oil in the mouth and then drink a glass of water. Do
                      this on empty stomach for 21 days.
                    </li>
                    <br />
                    <li>
                      If you still feel that you did not get relief from
                      migraine, give a gap of 15 days and then do the protocol
                      again for 21 days. This cycle should be repeated until the
                      migraine is gone.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Tachy cardia</li>
                    <br />
                    <li>After Heart attack</li>
                    <br />
                    <li>Hole in the Heart</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Coriander leaves, Holy basil, Betel leaves ( Remove
                          the petiole), Mint, Tinospora cordifolia, Abutilon
                          indicum
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="w-35-29">
                        <ul className="p-2">
                          <li>Little millet - 2 days</li>
                          <li>Kodo millet - 2 day</li>
                          <li>Foxtail millet - 1 day</li>
                          <li>Brown top millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                        <p className="border-t border-gray-500 p-2">
                          The best way to consume millets in the form of
                          fermented porridge for 5 to 6 weeks
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Juices:</strong>Salad cucumber/ Bottle gourd/
                          Ash gourd.
                        </li>
                        <br />
                        <li>
                          Consume above mentioned juices one week each and
                          repeat the cycle for 9 weeks. Juices should be taken
                          on empty stomach and maintain gap 30mins between
                          decoctions and juices.
                        </li>{" "}
                        <br />
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>C4. С5</li>
                    <br />
                    <li>L4, L5</li>
                    <br />
                    <li>Sciatica</li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Curry leaves, Nyctanthes arbor-tristis, Guava leaves,
                      Abutilon indicum, Pongamia pinnata, Tender tamarind leaves
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 w-[30%] align-top">
                  <ul className="p-2">
                    <li>Foxtail millet - 3 day</li>
                    <li>Brown top millet - 3 day</li>
                    <li>Little millet - 1 days</li>
                    <li>Kodo millet - 1 days</li>
                    <li>Barnyard millet - 1 days</li>
                  </ul>
                  <p className="border-t border-gray-500 p-2">
                    Take weekly one sesame laddu made with palm jaggery
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Varicose veins</li>
                    <br />
                    <li>Varicocele</li>
                    <br />
                    <li>Hydrocele</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Aegle marmelos, Ivy gourd leaves, Nyctanthes
                          arbor-tristis leaves, papaya leaves, Curry leaves
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Little millet - 3 days</li>
                          <li>Kodo millet - 3 day</li>
                          <li>Foxtail millet - 1 day</li>
                          <li>Brown top millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Juices:</strong>Tomato / Ivy gourd / Capsicum
                        </li>
                        <br />
                        <li>
                          Consume above mentioned juices one week each and
                          repeat the cycle. Juices should be taken on empty
                          stomach and maintain gap 30mins between decoctions and
                          juices.
                        </li>{" "}
                        <br />
                      </ul>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          Apply tomato juice on varicose veins and wash it after
                          some time. Apply homeo medicine
                          <strong>Hamamelis Virginica.</strong>
                        </li>
                        <br />
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Platelets Increase</li>
                    <br />
                    <li>Dengue fever</li>
                    <br />
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Nyctanthes arbor-tristis, Papaya leaves, Curry leaves,
                      Drumstick leaves, Holy basil, Tinospora cordifolia, Tender
                      tamarind leaves, Aegle marmelos
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Little millet - 2 days</li>
                    <li>Kodo millet - 2 days</li>
                    <li>Foxtail millet - 1 day</li>
                    <li>Brown top millet - 1 day</li>
                    <li>Barnyard millet - 1 days</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Platelets decrease</li>
                    <br />
                    <li>WBC decrease</li>
                    <br />
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Nyctanthes arbor-tristis, Papaya leaves, Holy basil,
                      Bermuda grass, Wild date palm, Sambar onion, Drumstick
                      leaves, Tender tamarind leaves
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Little millet - 2 days</li>
                    <li>Kodo millet - 2 days</li>
                    <li>Foxtail millet - 2 day</li>
                    <li>Brown top millet - 2 day</li>
                    <li>Barnyard millet - 2 days</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Infertility</li>
                    <br />
                    <li>Low Sperm count</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Tender tamarind, Drumstick leaves, Peepal leaves, Neem
                          leaves, betel leaves (Remove the petiole), Abutilon
                          indicum, Mango leaves
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Little millet - 3 days</li>
                          <li>Kodo millet - 1 day</li>
                          <li>Foxtail millet - 1 day</li>
                          <li>Brown top millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Oils:</strong>Coconut oil / Safflower oil /
                          Niger seed oil
                        </li>
                        <br />
                        <li>
                          Consume all above mentioned oils one week each and
                          repeat the cycle. Take 2 to 3 spoons of oil and
                          maintain gap of 30 mins between oils and decoctions
                        </li>{" "}
                        <br />
                        <li>
                          Source of oils should be strictly from bull driven
                          wooden Ghana's Oils should be stored in glass or
                          porcelain containers.
                        </li>{" "}
                        <br />
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Constipation</li>
                    <br />
                    <li>Piles</li>
                    <br />
                    <li>Fistula</li>
                    <br />
                    <li>Fissures</li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Pongamia pinnata, Senna, Roselle, Fenugreek leaves,
                      Coriander leaves, Banana stem
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 w-[30%] align-top">
                  <ul className="p-2">
                    <li>Foxtail millet - 3 day</li>
                    <li>Brown top millet - 3 day</li>
                    <li>Little millet - 1 days</li>
                    <li>Kodo millet - 1 days</li>
                    <li>Barnyard millet - 1 days</li>
                  </ul>
                  <p className="border-t border-gray-500 p-2">
                    The best way to consume millets in the form of fermented
                    porridge for 5 to 6 weeks
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Urine infection</li>
                    <br />
                    <li>Prostate (Men)</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Bryophyllum pinnatum, Coriander leaves, Mint,
                          Boerhavia diffusa, Drumstick leaves, Ruta graveolens,
                          Dillweed leaves, Banana stem.
                        </div>
                        <br />
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Little millet - 3 days</li>
                          <li>Kodo millet - 1 day</li>
                          <li>Foxtail millet - 1 day</li>
                          <li>Brown top millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          Using of structured water for cooking and drinking is
                          mandatory.
                        </li>
                        <br />
                        <li>
                          Take buttermilk. Finger millet milk, Pearl millet milk
                          works very well on this issue. Take Fenugreek seed
                          water, coconut water, and lemon water. One can take
                          Bottle gourd/ Ash gourd/ Salad cucumber juice. One can
                          also take Banana stem decoction with outer layer in
                          the morning and evening.
                        </li>{" "}
                        <br />
                        <li>
                          After urination clean that part with Sour buttermilk.
                          After 2 to 3 minutes wash it with clean water. This
                          has to be done for a week.
                        </li>{" "}
                        <br />
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>HIV</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Wild date palm leaves, Bermuda grass, Tinospora
                          cordifolia, Pongamia pinnata, Aegle marmelos,
                          Phyllanthus niruri leaves
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="w-35-29">
                        <ul className="p-2">
                          <li>Kodo millet - 3 day</li>
                          <li>Little millet - 1 days</li>
                          <li>Foxtail millet - 1 day</li>
                          <li>Brown top millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                        <p className="border-t border-gray-500 p-2">
                          The best way to consume millets in the form of
                          fermented porridge for 5 to 6 weeks
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Oils:</strong>Coconut oil / Niger seed oil /
                          Peanut oil
                        </li>
                        <br />
                        <li>
                          Consume all above mentioned oils one week each and
                          repeat the cycle. Take 2 to 3 spoons of oil and
                          maintain gap of 30 mins between oils and decoction.
                        </li>{" "}
                        <br />
                        <li>
                          Source of oils should be strictly from bull driven
                          wooden Ghana's Oils should be stored in glass or
                          porcelain containers.
                        </li>{" "}
                        <br />
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Skin problems</li>
                    <br />
                    <li>Psoriasis</li>
                    <br />
                    <li>Eczema dry/ weeping</li>
                    <br />
                    <li>Vitiligo</li>
                    <br />
                    <li>Ichthyosis</li>
                    <br />
                    <li>Bald Head</li>
                    <br />
                    <li>Alopecia Areta/ Alopecia Totallis</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Aloe vera, Centella asiatica, Mint, coriander, Dill
                          weed, Abutilon indicum
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Foxtail millet - 3 day</li>
                          <li>Brown top millet - 3 day</li>
                          <li>Little millet - 1 days</li>
                          <li>Kodo millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Oils:</strong>Sesame oil / Coconut oil /
                          Safflower oil
                        </li>
                        <br />
                        <li>
                          Consume all above mentioned oils one week each and
                          repeat the cycle. Take 2 to 3 spoons of oil and
                          maintain gap of 30 mins between oils and decoctions
                        </li>{" "}
                        <br />
                        <li>
                          Source of oils should be strictly from bull driven
                          wooden Ghana's Oils should be stored in glass or
                          porcelain containers.
                        </li>
                        <br />
                      </ul>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>
                            Daily Night apply Sesame Oil to the affected area.
                          </strong>
                        </li>
                        <br />
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>E.S.R</li>
                    <br />
                    <li>Urticaria</li>
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Nyctanthes arbor-tristis, Papaya leaves, Curry leaves,
                          Abutilon indicum, Banana stem, Sambar onion, Fenugreek
                          leaves
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Little millet - 3 days</li>
                          <li>Kodo millet - 3 day</li>
                          <li>Foxtail millet - 1 day</li>
                          <li>Brown top millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Juices:</strong>Take the below juices for 21
                          days give one-week gap and again you can take the
                          juices.
                        </li>
                        <br />
                        <li>
                          <strong>Morning:-</strong>(1 hour Before Breakfast)
                        </li>
                        <br />
                        <li>Carrot - 25 gm</li>
                        <li>Beetroot - 25 gm</li>
                        <li>Guava / Gooseberry - 5 g</li>
                        <br />
                        <li>
                          Grind all above mixture and add 200 ml water to
                          prepare Juice.
                        </li>
                        <br />
                        <li>
                          <strong>Evening:-</strong>(1 hour Before Dinner)
                        </li>
                        <br />
                        <li>20 Curry leaves ( Grinded)</li>
                        <br />
                        <li>
                          Soak these in Butter milk for 30 mins and Consume.
                        </li>
                        <br />
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>I.B.S</li>
                    <br />
                    <li>Colitis</li>
                    <br />
                    <li>Crohn's disease</li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Pongamia pinnata, Senna, Castor leaves, Fenugreck leaves,
                      Banana stem
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 w-[30%] align-top">
                  <ul className="p-2">
                    <li>Foxtail millet - 3 day</li>
                    <li>Brown top millet - 3 day</li>
                    <li>Little millet - 1 days</li>
                    <li>Kodo millet - 1 days</li>
                    <li>Barnyard millet - 1 days</li>
                  </ul>
                  <p className="border-t border-gray-500 p-2">
                    The best way to consume millets in the form of fermented
                    porridge for 5 to 6 weeks
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Anemia</li>
                    <br />
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Nyctanthes arbor-tristis, Papaya leaves, Curry leaves,
                          Fenugreek leaves
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="p-2 w-35-29">
                        <ul>
                          <li>Little millet - 3 days</li>
                          <li>Kodo millet - 3 day</li>
                          <li>Foxtail millet - 1 day</li>
                          <li>Brown top millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Juices:</strong>Take the below juices for 21
                          days give one-week gap and again you can take the
                          juices.
                        </li>
                        <br />
                        <li>
                          <strong>Morning:-</strong>(1 hour Before Breakfast)
                        </li>
                        <br />
                        <li>Carrot - 25 gm</li>
                        <li>Beetroot - 25 gm</li>
                        <li>Guava / Gooseberry - 5 g</li>
                        <br />
                        <li>
                          Grind all above mixture and add 200 ml water to
                          prepare Juice.
                        </li>
                        <br />
                        <li>
                          <strong>Evening:-</strong>(1 hour Before Dinner)
                        </li>
                        <br />
                        <li>20 Curry leaves ( Grinded)</li>
                        <br />
                        <li>
                          Soak these in Butter milk for 30 mins and Consume.
                        </li>
                        <br />
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Dental problems</li>
                    <br />
                    <li>Gum problems</li>
                    <br />
                    <li>Bleeding gums</li>
                    <br />
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Wild date palm leaves, Tender tamarind leaves, Pongamia
                      pinnata, Organic turmeric powder or Bulb, Peepal
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Little millet - 3 days</li>
                    <li>Kodo millet - 3 days</li>
                    <li>Foxtail millet - 1 day</li>
                    <li>Brown top millet - 1 day</li>
                    <li>Barnyard millet - 1 days</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="border border-gray-500 p-2 w-[15%] align-top"
                >
                  <ul>
                    <li>
                      Stop using tooth paste and clean the teeth and gums with
                      activated charcoal powder by using fingers.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Gums pain</li>
                    <br />
                    <li>Dental pain</li>
                    <br />
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Guava leaves, Cloves, Chamomile leaves, Pongamia pinnata
                      leaves, Tridax procumbens leaves
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Little millet - 3 days</li>
                    <li>Kodo millet - 3 days</li>
                    <li>Foxtail millet - 1 day</li>
                    <li>Brown top millet - 1 day</li>
                    <li>Barnyard millet - 1 days</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="border border-gray-500 p-2 w-[15%] align-top"
                >
                  <ul>
                    <li>
                      Stop using tooth paste and clean the teeth and gums with
                      activated charcoal powder by using fingers.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Chikungunya</li>
                    <br />
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>
                      Bermuda grass, Ruta graveolens, Chamomile leaves, Guava
                      leaves, Nyctanthes arbor-tristis, Abutilon indicum,
                      Chrysanthemum leaves ( home grown)
                    </li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Foxtail millet - 3 day</li>
                    <li>Brown top millet - 3 day</li>
                    <li>Little millet - 1 days</li>
                    <li>Kodo millet - 1 days</li>
                    <li>Barnyard millet - 1 days</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Lupus, S.L.E</li>
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Wild date palm leaves, Aegle marmelos, Pongamia
                          pinnata, Abutilon indicum
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="w-35-29">
                        <ul className="p-2">
                          <li>Foxtail millet - 3 day</li>
                          <li>Brown top millet - 3 day</li>
                          <li>Little millet - 1 days</li>
                          <li>Kodo millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                        <p className="border-t border-gray-500 p-2">
                          The best way to consume millets in the form of
                          fermented porridge for 5 to 6 weeks
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          <strong>Oils:</strong> Coconut oil/ Safflower oil /
                          Niger seed oil.
                        </li>
                        <br />
                        <li>
                          Consume all above mentioned oils one week each and
                          repeat the cycle. Take 2 to 3 spoons of oil and
                          maintain gap of 30 mins between oils and decoctions
                        </li>{" "}
                        <br />
                        <li>
                          {" "}
                          Source of oils should be strictly from bull driven
                          wooden Ghana's Oils should be stored in glass or
                          porcelain containers.
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>H1 N1</li>
                    <br />
                    <li>H5 N1</li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[55%] align-top">
                  <ul>
                    <li>Peepal, Nyctanthes arbor-tristis, Holy basil</li>
                    <li className="mt-4">
                      Consume all above decoctions one week each and repeat the
                      cycle
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-500 p-2 w-[30%] align-top">
                  <ul>
                    <li>Millet Porridge: 10 days</li>
                    <br />
                    <li>Little millet - 1 days</li>
                    <li>Kodo millet - 1 days</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Joint Swellings / Joint pains</li>
                    <br />
                    <li>Arthritis</li>
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Guava leaves, Nyctanthes arbor-tristis, Aegle
                          marmelos, Bermuda grass, Mint leaves, Tridax
                          procumbens leaves, Castor Oil leaves, Pongamia pinnata
                          leaves.
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="w-35-29">
                        <ul className="p-2">
                          <li>Foxtail millet - 3 day</li>
                          <li>Brown top millet - 3 day</li>
                          <li>Little millet - 1 days</li>
                          <li>Kodo millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          Apply Sesame Oil to the body and massage well. Try to
                          walk as long as possible at a stretch either during
                          sunrise or sunset.
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2 w-[15%] align-top">
                  <ul>
                    <li>Rheumatoid Arthritis</li>
                  </ul>
                </td>

                <td colSpan={2} className="border border-gray-500 align-top">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="border-r border-gray-500 flex flex-col w-64-71 p-2">
                        <div>
                          Silver date palm leaves, Pongamia pinnata leaves,
                          Nyctanthes arbor-tristis leaves, Coriander leaves,
                          Bermuda grass, Guava leaves, Roselle
                        </div>
                        <br />
                        <div>
                          Consume all above decoctions one week each and repeat
                          the cycle
                        </div>
                      </div>
                      <div className="w-35-29">
                        <ul className="p-2">
                          <li>Foxtail millet - 3 day</li>
                          <li>Brown top millet - 3 day</li>
                          <li>Little millet - 1 days</li>
                          <li>Kodo millet - 1 day</li>
                          <li>Barnyard millet - 1 day</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-500 p-2">
                      <ul>
                        <li>
                          Apply Sesame Oil to the body and massage well. Try to
                          walk as long as possible at a stretch either during
                          sunrise or sunset.
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HealthIssueTable;
