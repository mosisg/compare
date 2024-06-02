/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '@/app/globals.css'

const Plan = () => {
    return (
        <div>

            <div className="ph_container__child">
                <section className="ph_spacer mobile-how-it-works">
                 
                    <article className="section-how-it-works__step ph_inner_spacer">
                        <span id="step1" className="anchor" />
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/hourglass.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/hourglass.svg"
                            />
                            <img
                                className="ph-icon-green img-left"
                                src="/img/planhub/how_it_works_icons/hourglass.svg"
                                alt="hourglass"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <h3
                            className="heading3 normal section-how-it-works__bullet"
                            itemProp="name"
                        >
                            <strong>Step 1</strong>: Determine your needs
                        </h3>
                        <div>
                            <h4 className="heading4 subtitle">
                                How do you define your calling time needs?
                            </h4>
                            <p className="subtitle">
                                In 2023, the market offers 3 main call time options; 0 minutes, 100
                                minutes or unlimited, a majority prefer to have peace of mind and opt
                                for the unlimited call time option, but is it the most economical
                                option? To avoid overpaying, review your recent bills via your current
                                provider's app or customer portal to take stock of your call usage
                                over the past few months.
                            </p>
                        </div>
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/human-pray.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/human-pray.svg"
                            />
                            <img
                                className="ph-icon-green img-right"
                                src="/img/planhub/how_it_works_icons/human-pray.svg"
                                alt="pray"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <div>
                            <h4 className="heading4 subtitle">
                                Is 0 minutes of calling time really a viable option in 2023?
                            </h4>
                            <p className="subtitle">
                                VOIP apps like Facebook Messenger and WhatsApp, allow you to call
                                without using a phone plan. Regarding emergency calls like 911, these
                                are always available even if there are no minutes of call time. It is
                                therefore possible to{" "}
                                <a
                                    href="https://www.planhub.ca/quebec/compare-cellphone-plan/0min.0MB.3G.4G.5G.2years.2.1-9-2-65-5-545-8-6-7-4-10"
                                    className="ph_link"
                                    title="choose a 0 minute plan"
                                >
                                    choose a 0 minute plan
                                </a>{" "}
                                without putting your safety at risk if you are a person who rarely
                                uses his phone for regular calls.
                            </p>
                            <p className="subtitle">
                                The latest smartphones have the ability to direct calls to Wi-Fi. You
                                could use this feature if you have access to a Wi-Fi connection.
                                However, your provider will need to have this feature enabled.{" "}
                            </p>
                            <h4 className="heading4 subtitle">
                                Is 100 minutes per month of calling time enough?{" "}
                            </h4>
                            <p className="subtitle">
                                <a
                                    href="https://www.planhub.ca/quebec/compare-cellphone-plan/100min.2000MB.3G.4G.5G.2years.2.1-9-2-65-5-545-8-6-7-4-10"
                                    className="ph_link"
                                    title="the 100 minutes plans"
                                >
                                    The 100 minutes plans
                                </a>{" "}
                                are ideal for someone who wants to talk mostly via VOIP or Wi-Fi
                                calls, but who would like to ensure a safety cushion for impromptu
                                calls.
                            </p>
                        </div>
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/smartphone.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/smartphone.svg"
                            />
                            <img
                                className="ph-icon-green img-left"
                                src="/img/planhub/how_it_works_icons/smartphone.svg"
                                alt="smartphone"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <div>
                            <h4 className="heading4 subtitle">
                                Unlimited calls, is it the best option?{" "}
                            </h4>
                            <p className="subtitle">
                                If peace of mind is priceless to you, the answer is "yes". If your
                                concern is not to save money on your cell phone plan, but to have the
                                peace of mind that you will be able to talk for as long as your
                                smartphone battery will allow,{" "}
                                <a
                                    href="https://www.planhub.ca/quebec/compare-cellphone-plan/unlimitedcalls.0MB.3G.4G.5G.2years.2.1-9-2-65-5-545-8-6-7-4-10"
                                    className="ph_link"
                                    title="unlimited calling time plans "
                                >
                                    unlimited calling time plans
                                </a>{" "}
                                are for you!{" "}
                            </p>
                            <h4 className="heading4 subtitle">
                                How to evaluate your texting needs?
                            </h4>
                            <p className="subtitle">
                                The vast majority of plans include unlimited messaging for text
                                messages in Canada. It is therefore advisable to assume that unlimited
                                texting is what you need unless there is a specific condition in your
                                situation that favours a limited number of texts. If that's your
                                condition, look into pre-paid plans. Among others, Virgin Plus offers
                                packages of 500 text messages per month.{" "}
                            </p>
                        </div>
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/mobile-electronics.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/mobile-electronics.svg"
                            />
                            <img
                                className="ph-icon-green img-right"
                                src="/img/planhub/how_it_works_icons/mobile-electronics.svg"
                                alt="mobile electronics"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <div>
                            <h4 className="heading4 subtitle">
                                How to choose your calling options?
                            </h4>
                            <p className="subtitle">
                                Several options that used to be paid for are now included in
                                subscriptions and prepaid offers such as voicemail, caller ID, and
                                unlimited texting.{" "}
                            </p>
                            <p className="subtitle">
                                Other options such as three-way calling, however, require you to check
                                with your operator to see if they are offered or what their limit is.
                                For example, some operators may charge you for a three-way call if you
                                exceed a specific number of hours per month. The same thing for call
                                forwarding, it is included, but only to Canada. If you plan to have
                                your calls forwarded to a phone abroad, the option becomes payable.{" "}
                            </p>
                            <p className="subtitle">
                                If you're looking for a package for everyday use, consider only the
                                basic options such as voicemail, call display and unlimited texting so
                                as not to increase your bill unnecessarily.
                            </p>
                        </div>
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/data-server.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/data-server.svg"
                            />
                            <img
                                className="ph-icon-green img-left"
                                src="/img/planhub/how_it_works_icons/data-server.svg"
                                alt="data server"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <div>
                            <h4 className="heading4 subtitle">
                                How to determine your data needs (GB)?
                            </h4>
                            <p className="subtitle">
                                Both iOS and Android smartphones log incoming and outgoing data
                                volumes. Look in your device's settings to see the amount of data
                                consumed (GB). The settings and path can differ and vary greatly from
                                one cell phone to another so the easiest way is to search for "how to
                                view your mobile data usage [Brand and Models of your device]?"
                            </p>
                            <p className="subtitle">
                                Another way is to look at your bill or the usage section on your
                                online account. Choose three recent plans, 1 busy month, 1 average
                                month and 1 below average month, and add them up and divide the result
                                by 3 to get an average.{" "}
                            </p>
                        </div>
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/user.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/user.svg"
                            />
                            <img
                                className="ph-icon-green img-left"
                                src="/img/planhub/how_it_works_icons/user.svg"
                                alt="user"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <div>
                            <p className="subtitle">
                                If this is your first cell phone plan and you have no idea how much
                                data you're going to use, choose a basic plan which usually includes
                                between 2 and 6 GB of data. Then go to your phone's data settings and
                                enter a cellular data limit that is 50% of the data included in your
                                plan, or 3 GB for a 6 GB plan. You will receive an alert when you
                                approach this limit. If this happens during the first two weeks and
                                you feel that your consumption has been normal, you will probably need
                                to increase your data volume.{" "}
                            </p>
                            <p className="subtitle">
                                Contact your carrier to choose a higher data plan.{" "}
                            </p>
                        </div>
                    </article>
                    <article className="section-how-it-works__step ph_inner_spacer">
                        <span id="step2" className="anchor" />
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/canada-map.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/canada-map.svg"
                            />
                            <img
                                className="ph-icon-green img-right"
                                src="/img/planhub/how_it_works_icons/canada-map.svg"
                                alt="Canada map"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <h3
                            className="heading3 normal section-how-it-works__bullet"
                            itemProp="name"
                        >
                            <strong>Step 2</strong>: Determine which provider options are available
                            in your geographical area
                        </h3>
                        <div>
                            <h4 className="heading4 subtitle">
                                How to determine which provider has good network coverage in your
                                area?
                            </h4>
                            <p className="subtitle">
                                You can consult the PlanHub{" "}
                                <a
                                    href="https://www.planhub.ca/planhub/coverage-map"
                                    className="ph_link"
                                    title="cellular network coverage map"
                                >
                                    cellular network coverage map
                                </a>
                                . It shows you the coverage of each operator by region so you can see
                                which provider has good network coverage for your area. Just enter an
                                address and the map will show you which providers have cell towers
                                located nearby, so you'll have a better idea of which providers have
                                good coverage in your geographical area.
                            </p>
                            <br />
                        </div>
                    </article>
                    <article className="section-how-it-works__step ph_inner_spacer">
                        <span id="step3" className="anchor" />
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/money-bag.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/money-bag.svg"
                            />
                            <img
                                className="ph-icon-green img-left"
                                src="/img/planhub/how_it_works_icons/money-bag.svg"
                                alt="money bag"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <h3
                            className="heading3 normal section-how-it-works__bullet"
                            itemProp="name"
                        >
                            <strong>Step 3</strong>: Determine your budget
                        </h3>
                        <div>
                            <h4 className="heading4 subtitle">
                                How do you determine an appropriate budget for a cell phone plan?
                            </h4>
                            <p className="subtitle">
                                As part of sound budget management, PlanHub estimates that a maximum
                                of 1.25% of your gross income should be spent on a cell phone plan.
                                For an annual income of $50,000 gross, the amount allocated to your
                                monthly subscription would be $52.50. This estimate was obtained by
                                following the many budgeting trends of 2023. Please consult a
                                professional in the field to validate that it applies to your
                                situation.
                            </p>
                        </div>
                    </article>
                    <article className="section-how-it-works__step ph_inner_spacer">
                        <span id="step4" className="anchor" />
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/insights.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/insights.svg"
                            />
                            <img
                                className="ph-icon-green img-right"
                                src="/img/planhub/how_it_works_icons/insights.svg"
                                alt="loup"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <h3
                            className="heading3 normal section-how-it-works__bullet"
                            itemProp="name"
                        >
                            <strong>Step 4</strong>: Understand the proposed plans
                        </h3>
                        <div>
                            <h4 className="heading4 subtitle">
                                What do you need to understand about a cell phone plan to make the
                                right choice?
                            </h4>
                            <p className="subtitle">
                                When you compare the plans of different operators on PlanHub, here is
                                how to understand what is proposed.
                            </p>
                            <p className="subtitle">
                                The amount to the right of "Upfront" indicates what you will have to
                                pay when you sign up for your plan. This usually includes the
                                activation fee and the cost of a new device, if applicable.
                            </p>
                            <p className="subtitle">
                                The "Monthly" amount indicates what the plan costs each month.
                            </p>
                            <p className="subtitle">
                                The "Total 2 years" is the sum of everything you will have paid at the
                                end of the 24-month plan, before taxes.
                            </p>
                            <p className="subtitle">
                                Read the additional notes carefully, they specify additional
                                discounts, temporary promotions, cashback and other rewards specific
                                to the selected plan.
                            </p>
                        </div>
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/global-network.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/global-network.svg"
                            />
                            <img
                                className="ph-icon-green img-left"
                                src="/img/planhub/how_it_works_icons/global-network.svg"
                                alt="global network"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <div>
                            <h4 className="heading4 subtitle">
                                Do I have to pay for texting and calling outside of my province?
                            </h4>
                            <p className="subtitle">
                                Some plans offer unlimited calling only to your home province, so make
                                sure your plan includes Canada.
                            </p>
                            <h4 className="heading4 subtitle">
                                I need to call the U.S. often, are there any plans?
                            </h4>
                            <p className="subtitle">
                                There are "unlimited calls and text messages" plans that include
                                Canada and the United States. The PlanHub results page allows you to
                                include this option in the search filter to find these plans.
                                Otherwise, operators will charge you for incoming and outgoing text
                                messages and outgoing calls to the US.
                            </p>
                            <h4 className="heading4 subtitle">
                                Do you need to call overseas countries?
                            </h4>
                            <p className="subtitle">
                                If you usually use a calling card to call abroad, you may need to
                                contact your family at any time. Many operators offer preferential
                                rates on hours of calls to countries overseas.
                            </p>
                        </div>
                    </article>
                    <article className="section-how-it-works__step ph_inner_spacer">
                        <span id="step5" className="anchor" />
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/pos-terminal.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/pos-terminal.svg"
                            />
                            <img
                                className="ph-icon-green img-right"
                                src="/img/planhub/how_it_works_icons/pos-terminal.svg"
                                alt="POS terminal"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <h3
                            className="heading3 normal section-how-it-works__bullet"
                            itemProp="name"
                        >
                            <strong>Step 5</strong>: Choosing your cell phone plan
                        </h3>
                        <div>
                            <h4 className="heading4 subtitle">
                                How to choose the right cell phone plan?
                            </h4>
                            <p className="subtitle">
                                Once you have determined your needs, which operators cover your
                                geographical area, your budget and you know how to properly understand
                                the proposed plans, you will be in a position to make an informed
                                choice.
                            </p>
                            <p className="subtitle">
                                Depending on your financial situation, you may either choose a
                                budget-friendly option or one that gives you peace of mind. Make sure
                                the plan you choose properly meets your needs and your ability to pay.{" "}
                            </p>
                        </div>
                    </article>
                    <article className="section-how-it-works__step ph_inner_spacer">
                        <span id="step6" className="anchor" />
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/piggy-bank.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/piggy-bank.svg"
                            />
                            <img
                                className="ph-icon-green img-left"
                                src="/img/planhub/how_it_works_icons/piggy-bank.svg"
                                alt="piggy bank"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <h3
                            className="heading3 normal section-how-it-works__bullet"
                            itemProp="name"
                        >
                            <strong>Step 6</strong>: Find ways to save and even enjoy
                        </h3>
                        <div>
                            <h4 className="heading4 subtitle">
                                Is direct debit a good way to save money?
                            </h4>
                            <p className="subtitle">
                                More and more operators are charging an extra $5 if you choose to pay
                                via the Internet or through your bank. By choosing direct debit, you
                                will avoid this extra $5 per month.{" "}
                            </p>
                            <h4 className="heading4 subtitle">
                                Save on your cell phone plan with a credit card
                            </h4>
                            <p className="subtitle">
                                An indirect method to save money on your cell phone plan is to use a
                                credit card that gives you cash back or points on your purchases.
                                Choose your card accordingly, they don't all have the same types of
                                advantages for the payment of telecommunication bills.
                            </p>
                            <h4 className="heading4 subtitle">
                                How to monitor your cellular data usage to save money?
                            </h4>
                            <p className="subtitle">
                                Once you have purchased your mobile plan, your habits may change. If
                                you have carefully assessed your cellular data usage to avoid
                                overpaying, your Wi-Fi access may change over time. A new job and new
                                habits may give you better daily access to Wi-Fi. If this is the case,
                                you could save a lot of money by changing your plan to one with less
                                data.
                            </p>
                            <h4 className="heading4 subtitle">
                                Negotiate to get the best price for your cell phone plan
                            </h4>
                            <p className="subtitle">
                                If you plan to stay with your current operator, you should know that
                                they will apply the usual rate to your plan. However, it is possible
                                to negotiate a new discount. Negotiate with a customer service
                                representative and tell them that you are a good customer and that you
                                are willing to stay with them if they make an effort. By committing to
                                two years, you can get a discount that can amount to tens of dollars a
                                month.{" "}
                            </p>
                            <h4 className="heading4 subtitle">
                                How can you take advantage of the holidays to save on your cell phone
                                plan?{" "}
                            </h4>
                            <p className="subtitle">
                                The end of the year is a good time to get large amounts of data or
                                special offers. However, the various buyouts between operators and
                                inflation led to cuts on subscriptions around the great moments of
                                celebrations such as "Boxing day".
                            </p>
                            <h4 className="heading4 subtitle">
                                Bundle your services to save money?{" "}
                            </h4>
                            <p className="subtitle">
                                If you have an internet or TV subscription with your operator, they
                                should offer you a discounted rate for your subscriptions. Bundling
                                your subscriptions could save you several tens of dollars per month.{" "}
                            </p>
                            <h4 className="heading4 subtitle">Are family packages economical?</h4>
                            <p className="subtitle">
                                Do you have several family members at the same address? Many operators
                                allow you to add additional subscriptions for your family members at a
                                preferential rate. If you have also subscribed to a TV and internet
                                package with the same operator, you could save a considerable amount
                                of money each month.{" "}
                            </p>
                            <h4 className="heading4 subtitle">Refer a new client to benefit?</h4>
                            <p className="subtitle">
                                Some operators offer you a discount if you refer a new client to their
                                services. Of course, if you refer more than one person, that's a lot
                                of dollars per person that will be deducted from your plan, so don't
                                hesitate to ask your operator about it.
                            </p>
                            <h4 className="heading4 subtitle">Use promotional codes</h4>
                            <p className="subtitle">
                                Some providers assign promotional codes to their customers. If you use
                                another user's promotional code you will get a discount on your plan
                                and the user who owns the code will also receive some form of
                                compensation. This is a great strategy to save money on your plan and
                                also to generate some cash. If you would like to leave a review on a
                                provider you have been a customer of, go to our review page. You will
                                also be able to post your promotional code if you have one.{" "}
                            </p>
                        </div>
                    </article>
                    <article className="section-how-it-works__step ph_inner_spacer">
                        <span id="step7" className="anchor" />
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                width={65}
                                height={65}
                                srcSet="/img/planhub/how_it_works_icons/gavel.svg"
                            />
                            <source
                                media="(min-width: 768px)"
                                width={120}
                                height={120}
                                srcSet="/img/planhub/how_it_works_icons/gavel.svg"
                            />
                            <img
                                className="ph-icon-green img-right"
                                src="/img/planhub/how_it_works_icons/gavel.svg"
                                alt="gavel"
                                width={120}
                                height={120}
                            />
                        </picture>
                        <h3
                            className="heading3 normal section-how-it-works__bullet"
                            itemProp="name"
                        >
                            <strong>Step 7</strong>: Once you've purchased your plan, stay alert!
                        </h3>
                        <div>
                            <h4 className="heading4 subtitle">
                                How to avoid being overcharged on your cell phone plan?
                            </h4>
                            <p className="subtitle">
                                It is sometimes tempting to listen to videos when you are out of range
                                of Wi-Fi like in public transportation, but these data accumulate
                                quickly and can make you exceed your plan. Consider downloading your
                                music and videos via Wi-Fi so you can listen to them offline.
                            </p>
                            <h4 className="heading4 subtitle">Set data barriers for yourself</h4>
                            <p className="subtitle">
                                You can create alerts or set a data threshold in your phone's options.
                            </p>
                            <h4 className="heading4 subtitle">How to avoid roaming charges?</h4>
                            <p className="subtitle">
                                You are not automatically protected by roaming charges. If you receive
                                a text message from the United States or elsewhere in the world, you
                                could be charged an average of $0.30. Your outgoing messages to a
                                foreign country are also billed by your operator. Therefore, plan a
                                package accordingly if you plan to communicate with people outside of
                                Canada.{" "}
                            </p>
                            <p className="subtitle">
                                The same applies to calls and data that you use abroad. If you are
                                travelling in a geographical area not covered by your plan, contact
                                your provider to find out about your roaming connectivity options,
                                which vary greatly from one provider to another. You could end up with
                                a hefty bill if you don't plan ahead.{" "}
                            </p>
                            <h4 className="heading4 subtitle">How to avoid late payment fees?</h4>
                            <p className="subtitle">
                                Late payment fees are particularly high since the law allows for 50%
                                interest. Some operators may also charge you 50% of the total amount
                                due, which can amount to hundreds of dollars a month. Be aware that if
                                you fail to pay for more than three months, you will enter a
                                never-ending cycle where the interest will only increase to several
                                times the amount due. To avoid this situation, make sure you choose a
                                package that fits your budget and use an automatic payment method.
                            </p>
                        </div>
                    </article>
                </section>
            </div>

        </div>
    )
}

export default Plan