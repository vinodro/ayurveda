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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HealthIssueTable;
