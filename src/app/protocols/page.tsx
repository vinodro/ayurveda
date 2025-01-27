import React from "react";

const HealthIssueTable: React.FC = () => {
  return (
    <div className="p-4">
      <table className="table-auto border-collapse border border-gray-500 w-full">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-gray-500 p-2">Health Issue</th>
            <th className="border border-gray-500 p-2">Decoctions</th>
            <th className="border border-gray-500 p-2">Millets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 p-2">Dialysis</td>
            <td className="border border-gray-500 p-2">
              Nyctanthes arbor-tristis, Coriander, Bryophyllum pinnatum, Banana
              stem (organic) Boerhavia diffusa, Abutilon indicum
            </td>
            <td className="border border-gray-500 p-2">
              <ul>
                <li>Little millet - 3 days</li>
                <li>Kodo millet - 3 days</li>
                <li>Barnyard millet - 3 days</li>
                <li>Foxtail millet - 1 day</li>
                <li>Brown top millet - 1 day</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">Albumin Urea</td>
            <td className="border border-gray-500 p-2">
              Consume all above decoctions one week each and repeat the cycle
            </td>
            <td className="border border-gray-500 p-2">
              Best way to consume millets is in the form of fermented porridge
              for 9 weeks (For Dialysis patients)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">Diabetes</td>
            <td className="border border-gray-500 p-2">
              Tinospora cordifolia, Jamun leaves, Ivy gourd leaves, Mint,
              Drumstick leaves, Abutilon indicum, Fenugreek leaves, Coriander
              leaves
              <br />
              Consume all above decoctions one week each and repeat the cycle
            </td>
            <td className="border border-gray-500 p-2">
              <ul>
                <li>Little millet - 2 days</li>
                <li>Kodo millet - 2 days</li>
                <li>Barnyard millet - 2 days</li>
                <li>Foxtail millet - 2 days</li>
                <li>Brown top millet - 2 days</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">Thyroid</td>
            <td className="border border-gray-500 p-2">
              Drumstick leaves, Tender tamarind leaves, Betel leaves (Remove the
              petiole), Pongamia pinnata, Roselle, Abutilon indicum, Tinospora
              cordifolia
            </td>
            <td className="border border-gray-500 p-2">
              <ul>
                <li>Little millet - 3 days</li>
                <li>Kodo millet - 1 day</li>
                <li>Barnyard millet - 1 day</li>
                <li>Foxtail millet - 1 day</li>
                <li>Brown top millet - 1 day</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">Hormonal Imbalance</td>
            <td className="border border-gray-500 p-2">
              Consume all above decoctions one week each and repeat the cycle
            </td>
            <td className="border border-gray-500 p-2">
              <ul>
                <li>Little millet - 3 days</li>
                <li>Kodo millet - 1 day</li>
                <li>Barnyard millet - 1 day</li>
                <li>Foxtail millet - 1 day</li>
                <li>Brown top millet - 1 day</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">Endometriosis</td>
            <td className="border border-gray-500 p-2">
              Oils: (At least 3 types of oils) Coconut oil / Safflower oil /
              Peanut oil / Sesame oil / Niger seed oil
              <br />
              Consume all above-mentioned oils one week each and repeat the
              cycle. Take 2 to 3 spoons of oil and maintain a gap of 30 mins
              between oils and decoctions.
            </td>
            <td className="border border-gray-500 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">Angina Pectoris</td>
            <td className="border border-gray-500 p-2">
              Juices: Salad cucumber / Bottle gourd / Ash gourd
              <br />
              Consume above mentioned juices one week each and repeat the cycle
              for 9 weeks. Juices should be taken on an empty stomach and
              maintain a gap of 30 mins between decoctions and juices.
            </td>
            <td className="border border-gray-500 p-2">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HealthIssueTable;
