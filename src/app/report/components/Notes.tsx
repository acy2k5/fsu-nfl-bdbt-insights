import Anchor from '@/components/ui/Anchor'
import Section from './ReSect'

export default function Notebook() {
  return (
    <main className="relative max-w-screen-xl mx-auto px-6">
      {/* */}
      <div className="grid grid-cols-1 gap-6">
        <Section title="1.0)" subTitle="Motivation">
          <p>
            This project focuses on{' '}
            <strong>real-time identification of potential threats</strong> to
            the ball carrier using <strong>AI techniques</strong>. Leveraging
            historical data from a team's interactions with other teams, the
            trained AI model can effectively pinpoint and highlight players
            posing a threat in the current in-field situation. This innovative
            approach <strong>enhances the viewing experience for fans</strong>,
            providing them with{' '}
            <strong>more engaging and exciting insights</strong> during
            game-watching sessions.
          </p>
        </Section>

        {/* Container */}
        <div className="block border border-solid rounded-lg bg-gray-900 border-gray-800 p-6">
          <section>
            <h3 className="font-semibold mb-4 text-lg text-white">
              <span className="mr-2">2.0)</span>Main results and visualization
            </h3>
            {/* Paragraph container */}
            <div className="grid gap-4  text-base text-gray-400">
              <p>
                In each frame, the AI model calculates the{' '}
                <strong>threatening index</strong>, representing the probability
                of a Defensive Team (DT) player to act as a tackler. This
                computation is performed for every DT player. The visualization
                tool then strategically highlights DT players based on their
                respective tackling probabilities.
              </p>
              <p>
                The provided model, named 'tackler_test_result_48_42.h5', is
                designed to specifically identify tacklers when the Miami
                Dolphins are the possession team (PT). Trained on the tracking
                and play data from Miami Dolphins' performances in weeks 1-8 of
                2022, the model is put to the test during Miami Dolphins' week 9
                game against the Chicago Bears (gameId: 2022110601). The ensuing
                video demonstrates the model's performance in action.
              </p>
              <p>
                (Note: Although this model is specifically trained for the Miami
                Dolphins, the same concept can be readily extended to other
                teams. We are currently conducting tests to determine if a
                universal model that can accommodate all teams is feasible.)
              </p>
              <p>
                This video features 32 plays where the Miami Dolphins are the
                possession team, and tacklers are identified within the play
                data. Miami Dolphins and Chicago Bears players are represented
                by orange and blue circles, respectively, while the ballcarrier
                is denoted by a brown circle. The intensity of the blue circles
                reflects the threatening index of each player, with brighter
                blue circles indicating higher threat levels and darker blue
                circles representing lower threat levels.
              </p>
              <p>
                The playID for the 32 plays are [2176, 3456, 1027, 2564, 2312,
                1929, 394, 3094, 2200, 1048, 1689, 1950, 2336, 930, 2595, 304,
                1713, 2224, 2616, 955, 451, 2245, 2379, 979, 1625, 349, 2269,
                1003, 1646, 1905, 373, 1791].
              </p>
              {/* GIPHY container */}
              <div>
                <div
                  style={{
                    width: '100%',
                    height: 0,
                    paddingBottom: '60%',
                    position: 'relative',
                    marginBottom: 16,
                  }}
                >
                  <iframe
                    title="GIPHY Video"
                    src="https://giphy.com/embed/0RbULJzFTaE2KJptj2"
                    width="100%"
                    height="100%"
                    className="absolute rounded"
                    allowFullScreen
                  ></iframe>
                </div>
                <p>
                  <Anchor
                    href="https://giphy.com/gifs/0RbULJzFTaE2KJptj2"
                    title="Visit GIPHY to view the GIF"
                    children="via GIPHY"
                  />
                </p>
              </div>
            </div>
          </section>

          <HR />

          <section>
            <h3 className="font-semibold mb-4 text-lg text-white">
              <span className="mr-2">2.1)</span>Model demonstration: playId 1929
            </h3>
            {/* Pragraph container*/}
            <div className="grid gap-4 text-base text-gray-400">
              {/* GIPHY container */}
              <div>
                <div
                  style={{
                    width: '100%',
                    height: 0,
                    paddingBottom: '60%',
                    position: 'relative',
                    marginBottom: 16,
                  }}
                >
                  <iframe
                    title="GIPHY Video"
                    src="https://giphy.com/embed/urkKMSW4ADldfbRevX"
                    width="100%"
                    height="100%"
                    className="absolute rounded"
                    allowFullScreen
                  ></iframe>
                </div>
                <p>
                  <Anchor
                    href="https://giphy.com/gifs/urkKMSW4ADldfbRevX"
                    title="Visit GIPHY to view the GIF"
                    children="via GIPHY"
                  />
                </p>
              </div>
              <p>
                In this meticulous analysis of the 1929 slow-motion play, our
                model demonstrates its adeptness in navigating intricate
                scenarios, dynamically identifying potential tacklers based on
                on-field conditions. The play unfolds across three distinct
                stages, each revealing the model's capacity to interpret and
                respond to evolving situations.
              </p>
              <p>
                During Stage 1, encompassing the ball's journey from the 50-yard
                line to the 55-yard line(opponent’s 45-yard line) as the
                quarterback passes to the running back, the field becomes
                densely populated around the 55-yard line(opponent’s 45-yard
                line), presenting a complex scenario. Despite the proximity of
                five tackles and ends to the ball carrier, the AI model astutely
                singles out the three linebackers as the primary threats,
                showcasing its ability to discern the initial situation
                effectively.
              </p>
              <p>
                Moving into Stage 2, spanning the ball's movement from the
                55-yard line(opponent’s 45-yard line) to the 65-yard
                line(opponent’s 35-yard line), the Miami Dolphins successfully
                breach the first line of defense. Notably, as two linebackers
                are blocked by Miami's guards and tackles, their threat indexes
                diminish. Instead, focus shifts to the third linebacker and the
                end player directly confronting the ball carrier. This phase
                underscores the model's adaptability as it adjusts its threat
                assessment based on the evolving dynamics of the play.
              </p>
              <p>
                Stage 3 unfolds as the ball progresses from the 65-yard
                line(opponent’s 35-yard line) to the 80-yard line(opponent’s
                20-yard line), with the ball carrier surpassing all linebackers.
                Here, the threatening indexes of the linebackers gradually
                decrease with their increasing distance from the ball carrier.
                Simultaneously, emphasis shifts towards two safety players,
                intensifying as the ball carrier veers towards the right,
                ultimately culminating in a tackle by one of the highlighted
                safety players. This meticulous breakdown highlights the model's
                capacity to analyze and adapt its assessment throughout the
                unfolding stages of the play.
              </p>
            </div>
          </section>

          <HR />

          <section>
            <h3 className="font-semibold mb-4 text-lg text-white">
              <span className="mr-2">2.2)</span>Accuracy Assessment in the Miami
              Dolphins vs. Chicago Bears Game of 2022
            </h3>
            {/* Pragraph container*/}
            <div className="grid gap-4 text-base text-gray-400">
              <p>
                While the AI model continuously updates the threatening index
                (the probability of a player being a tackler) every 0.1 second
                throughout the play, the tackles.csv dataset only furnishes the
                ultimate tacklers for each play. Consequently, our comparison is
                based on the threatening index computed from the last 10th frame
                (1 second before the play concludes), aligning it with the
                actual tacklers.
              </p>
              <p>
                For instance, in play 2176, the ultimate tackler is identified
                as J. Johnson. The play encompasses 32 frames, and the
                threatening indices computed for J. Johnson at frame 22 are
                0.98, for N. Morrow is 0.97, for J. Brisker is 0.29, and close
                to 0 for all other players. With a threshold set at 0.7, the AI
                model identifies J. Johnson and N. Morrow as the tacklers. In
                comparison to the tackles.csv record, the AI model exhibits a
                single error in this play among 11 players. While the model
                inaccurately identifies N. Morrow as another tackler in contrast
                to the tackles.csv record, the team is of the opinion that the
                threatening index offers a broader perspective on how teamwork
                contributes to tackling.
              </p>
              <p>
                The accuracy of the model is assessed using the following
                formula.
              </p>
            </div>
          </section>
        </div>

        <Section
          title="3.0)"
          subTitle="Three pivotal factors influencing the threatening index"
        >
          <p className="text-gray-400">
            The analyses presented in this chapter rely on the dataset
            'week1-9np.csv'.
          </p>
          <article>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                  <th>11</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.43</td>
                  <td>0.23</td>
                  <td>0.14</td>
                  <td>0.10</td>
                  <td>0.10</td>
                  <td>0.09</td>
                  <td>0.06</td>
                  <td>0.05</td>
                  <td>0.03</td>
                  <td>0.04</td>
                  <td>0.03</td>
                </tr>
              </tbody>
            </table>
          </article>
        </Section>

        {/* Container */}
        <div className="block border border-solid rounded-lg bg-gray-900 border-gray-800 p-6">
          <section>
            <h3 className="font-semibold mb-4 text-lg text-white">
              <span className="mr-2">4.0)</span>AI model and training/test data
            </h3>
            {/* Pragraph container*/}
            <div className="grid gap-4 text-base text-gray-400">
              <p className="text-gray-400 text-base">
                We use the three factors mentioned in Section 3 as our inputs to
                estimate the threatening index for all DTplayers.
              </p>
            </div>
          </section>

          <HR />

          <section>
            <h3 className="font-semibold mb-4 text-lg text-white">
              <span className="mr-2">4.1)</span>Training/test data construction
            </h3>
            {/* Pragraph container*/}
            <div className="grid gap-4  text-base text-gray-400">
              <p>
                We initiate the data preparation process by cleaning the
                tracking data, ensuring its exclusivity to plays where Miami is
                the possession team, a recorded tackler exists, and eliminating
                frames preceding a successful ball pass. Subsequently, utilizing
                the refined data sets (week_1_cleaned.csv, ...,
                week_9_cleaned.csv), we structure the training and test data as
                follows
              </p>
              <p>
                The input features of the training/test data comprise three
                factors from the closest Defensive Team (DT) player, three
                factors from the second closest DT player, and so forth, up to
                three factors from the eleventh closest DT player.
              </p>
              <p>
                The target outputs for the training data are indicators of
                whether the closest player, second closest player, and so on, up
                to the eleventh closest player, is a tackler.
              </p>
              <p>
                For the test data, the outputs mirror those of the training
                data, augmented by an additional 'playId' column for
                visualization purposes.
              </p>
            </div>
          </section>

          <HR />

          <section>
            <h3 className="font-semibold mb-4 text-lg text-white">
              <span className="mr-2">4.2)</span> Ai Model
            </h3>
            {/* Pragraph container*/}
            <div className="grid gap-4 text-base text-gray-400">
              <p>
                Our AI model is an artificial neural network composed of 1 input
                layer, 6 hidden layers (Dense), 1 batch normalization layer
                between layers 2 and 3, and 1 output layer (Lambda). The source
                code for building this neural network is provided in the next
                cell. The model undergoes training using the Adam optimizer with
                a learning rate of 1e-4 for 1000 epochs, resulting in a
                reduction of the training loss to 0.27 and the test loss to
                0.48. The finalized model is saved as
                'tackler_test_result_48_42.h5'.
              </p>
              <p>
                Notably, due to its compact design, the processing time for each
                frame is less than 1ms, rendering it well-suited for real-time
                identification.
              </p>
            </div>
          </section>
        </div>

        <Section title="5.0)" subTitle="Conclusion and future work">
          <p>
            The AI model delivers real-time threatening indices for Defensive
            Team (DT) players, offering insights into on-field dynamics and
            showcasing the collaborative nature of tackling. Notably, it attains
            an accuracy of 0.884 in correctly identifying the final tackler just
            1 second before a play concludes.
          </p>
          <p>
            To enhance accuracy further, we plan to conduct a comprehensive
            analysis of the model's mistakes and leverage advanced tools to
            refine and improve its predictive capabilities.
          </p>
        </Section>
      </div>
    </main>
  )
}
