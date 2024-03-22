import { ActionIcon, Alert, Anchor, BackgroundImage, Badge, Box, Button, Card, Container, Flex, Group, Image, List, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title, useMantineColorScheme }
  from '@mantine/core'
import { IconArrowRight, IconBrandGithub, IconBrandInstagram, IconBrandProducthunt, IconBrandTelegram, IconBrandTwitter, IconBrandX, IconBuildingStore, IconCheckbox, IconCoins, IconCopyCheck, IconDeviceGamepad, IconGlobe, IconGoGame, IconInfoCircle, IconPhoto, IconRocket, IconSocial, IconSparkles, IconSubtask, IconTallymarks, IconTargetArrow, IconUserCheck, IconUsersGroup, IconWorld, }
  from '@tabler/icons-react'

import Emoji from '#/components/custom/Emoji'

import * as WebsiteStyles from '#/styles/Website.css'
import { useParams } from 'react-router-dom';
import { IconBrandYoutube } from '@tabler/icons-react';

export default function Legal() {

  // returned from `useParams`
  const params = useParams()

  let content

  switch (params.document) {
    case "terms":
      content = <Terms />
      break

    case "privacy":
      content = <Privacy />
      break

    case "cookie-policy":
      content = <CookiePolicy />
      break

    case "community-rules":
      content = <CommunityRules />
      break

    default:
      content = <Company />
      break
  }

  return (
    <Stack p={10} mt="4vw">
      {content}
    </Stack>
  )
}

const Terms = () => {
  return (
    <Container size={760}>
      <Group wrap="nowrap">
        <Emoji emoji='📄' size={36} />
        <Stack gap={0}>
          <Title order={1} fw={750} lh={1}>
            Terms of Service
          </Title>
          {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
          <Title order={2} c="dimmed" fw={600} size={18}>
            Governance rules, rights and responsibilities.
          </Title>
        </Stack>
      </Group>

      <p>These Terms of Service ("Terms") govern your use of , accessible at <a href="https://dorkodu.com">https://dorkodu.com</a>. Please read these Terms carefully before accessing or using the website. Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the service.</p>
      <p>By accessing or using the service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>
      <h2>Accounts</h2>
      <p>When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.</p>
      <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password, whether your password is with our service or a third-party service.</p>
      <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
      <h2>Intellectual Property</h2>
      <p>The service and its original content, features, and functionality are and will remain the exclusive property of Dorkodu and its licensors. The service is protected by copyright, trademark, and other laws of both the Turkey and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Dorkodu.</p>
      <h2>Links To Other Websites</h2>
      <p>Our service may contain links to third-party websites or services that are not owned or controlled by Dorkodu.</p>
      <p>Dorkodu has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Dorkodu shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>
      <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p>
      <h2>Termination</h2>
      <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
      <p>Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service.</p>
      <h2>Governing Law</h2>
      <p>These Terms shall be governed and construed in accordance with the laws of the Republic of Turkey, without regard to its conflict of law provisions.</p>
      <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our service and supersede and replace any prior agreements we might have between us regarding the service.</p>
      <h2>Changes</h2>
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
      <p>By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at <Anchor href="mailto:hey@dorkodu.com">hey@dorkodu.com</Anchor>.</p>
    </Container>)
}

const Privacy = () => {
  return (
    <Container size={760}>
      <Group wrap="nowrap">
        <Emoji emoji='🔐' size={36} />
        <Stack gap={0}>
          <Title order={1} fw={750} lh={1}>
            Privacy Policy
          </Title>
          {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
          <Title order={2} c="dimmed" fw={600} size={18}>
            Our respect for your information.
          </Title>
        </Stack>
      </Group>


      <p>Last updated: <i>March 05, 2024</i></p>
      <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
      <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
      <h2>Interpretation and Definitions</h2>
      <h3>Interpretation</h3>
      <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
      <h3>Definitions</h3>
      <p>For the purposes of this Privacy Policy:</p>
      <ul>
        <li>
          <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
        </li>
        <li>
          <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
        </li>
        <li>
          <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Dorkodu.</p>
        </li>
        <li>
          <p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
        </li>
        <li>
          <p><strong>Country</strong> refers to:  Turkey</p>
        </li>
        <li>
          <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
        </li>
        <li>
          <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
        </li>
        <li>
          <p><strong>Service</strong> refers to the Website.</p>
        </li>
        <li>
          <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
        </li>
        <li>
          <p><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
        </li>
        <li>
          <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
        </li>
        <li>
          <p><strong>Website</strong> refers to Dorkodu, accessible from <a href="https://dorkodu.com" rel="external nofollow noopener" target="_blank">https://dorkodu.com</a></p>
        </li>
        <li>
          <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
        </li>
      </ul>
      <h2>Collecting and Using Your Personal Data</h2>
      <h3>Types of Data Collected</h3>
      <h4>Personal Data</h4>
      <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
      <ul>
        <li>
          <p>Email address</p>
        </li>
        <li>
          <p>First name and last name</p>
        </li>
        <li>
          <p>Usage Data</p>
        </li>
      </ul>
      <h4>Usage Data</h4>
      <p>Usage Data is collected automatically when using the Service.</p>
      <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
      <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
      <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
      <h4>Information from Third-Party Social Media Services</h4>
      <p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
      <ul>
        <li>Google</li>
        <li>Discord</li>
        <li>Twitter</li>
      </ul>
      <p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
      <p>You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
      <h4>Tracking Technologies and Cookies</h4>
      <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
      <ul>
        <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
        <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
      </ul>
      <p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>
      <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
      <ul>
        <li>
          <p><strong>Necessary / Essential Cookies</strong></p>
          <p>Type: Session Cookies</p>
          <p>Administered by: Us</p>
          <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
        </li>
        <li>
          <p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
          <p>Type: Persistent Cookies</p>
          <p>Administered by: Us</p>
          <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
        </li>
        <li>
          <p><strong>Functionality Cookies</strong></p>
          <p>Type: Persistent Cookies</p>
          <p>Administered by: Us</p>
          <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
        </li>
      </ul>
      <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
      <h3>Use of Your Personal Data</h3>
      <p>The Company may use Personal Data for the following purposes:</p>
      <ul>
        <li>
          <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
        </li>
        <li>
          <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
        </li>
        <li>
          <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
        </li>
        <li>
          <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
        </li>
        <li>
          <p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
        </li>
        <li>
          <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
        </li>
        <li>
          <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
        </li>
        <li>
          <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
        </li>
      </ul>
      <p>We may share Your personal information in the following situations:</p>
      <ul>
        <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
        <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
        <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
        <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
        <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
        <li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
      </ul>
      <h3>Retention of Your Personal Data</h3>
      <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
      <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
      <h3>Transfer of Your Personal Data</h3>
      <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
      <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
      <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
      <h3>Delete Your Personal Data</h3>
      <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
      <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
      <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
      <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
      <h3>Disclosure of Your Personal Data</h3>
      <h4>Business Transactions</h4>
      <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
      <h4>Law enforcement</h4>
      <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
      <h4>Other legal requirements</h4>
      <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
      <ul>
        <li>Comply with a legal obligation</li>
        <li>Protect and defend the rights or property of the Company</li>
        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>Protect the personal safety of Users of the Service or the public</li>
        <li>Protect against legal liability</li>
      </ul>
      <h3>Security of Your Personal Data</h3>
      <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
      <h2>Children's Privacy</h2>
      <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
      <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
      <h2>Links to Other Websites</h2>
      <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
      <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
      <h2>Changes to this Privacy Policy</h2>
      <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
      <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, You can contact us:</p>
      <p><b>By Email:</b> <Anchor href='mailto:hey@dorkodu.com'>hey@dorkodu.com</Anchor></p>
    </Container>)
}

const Company = () => {
  return (
    <Box my={50} id='company'>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Stack gap={4} justify="center" maw={500} mx="auto">

          <Group wrap="nowrap">
            <Emoji emoji='💼' size={32} />
            <Stack gap={0}>
              <Title order={2} fw={750} lh={1}>
                Company
              </Title>
              {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
              <Title order={4} c="dimmed" fw={600} size={18}>
                Explore what we can do together.
              </Title>
            </Stack>
          </Group>

          <Group gap="xs" my={8}>
            <ActionIcon size="xl" color="dark" component='a' href="https://x.com/dorkodu" target="_blank"><IconBrandX /></ActionIcon>
            <ActionIcon size="xl" gradient={{ from: "cyan", to: "blue" }} variant="gradient" component='a' href="https://t.me/dorkodu" target="_blank"><IconBrandTelegram /></ActionIcon>
            <ActionIcon size="xl" color="gray" component='a' href="https://github.com/dorkodu" target="_blank"><IconBrandGithub size={26} /></ActionIcon>
            <ActionIcon size="xl" color="red.7" component='a' href="https://github.com/dorkodu" target="_blank"><IconBrandYoutube /></ActionIcon>
            <ActionIcon size="xl" gradient={{ from: "violet", to: "orange", deg: -220 }} variant="gradient" component='a' href="https://instagram.com/dorkodu" target="_blank"><IconBrandInstagram size={28} /></ActionIcon>
          </Group>
        </Stack>

        <div>
          <Alert title="Info" icon={<IconInfoCircle size={28} />}>
            <Text size="sm">We are not legally incorporated yet.</Text>
          </Alert>
        </div>
      </SimpleGrid>
    </Box>
  )
}

const CommunityRules = () => {
  return (
    <Container size={760}>
      <Group wrap="nowrap" maw={440}>
        <Emoji emoji='👥' size={40} />
        <Stack gap={0}>
          <Title order={1} fw={750} lh={1}>
            Community Rules
          </Title>
          {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
          <Title order={2} c="dimmed" fw={600} lh={1.2} size={18} mt={4}>
            Guidelines for all of our community members.
          </Title>
        </Stack>
      </Group>


      <p><b>Last updated:</b> March 21, 2024</p>

      <h3></h3>
      <p><b>We believe that everyone should have access to free tools for gamification, productivity and social media</b>. Our guidelines are meant to build a mutual understanding of what being a part of this community is all about. We will take action if any of these guidelines are not upheld, so please read carefully.</p>

      <h2>Always be Respectful</h2>
      <p>We come together from across the world at varying experiences with the same goal in mind - to grow. Curiosity, questioning, and cultural understanding are something we celebrate. Be respectful of others and where they’re coming from.</p>

      <h2>Help and support across all skill levels</h2>
      <p>We are all in this together. Life-wide gamification and productivity is hard and takes a lot of courage and dedication. If someone makes "easy" mistakes or has a question you think has an obvious answer, kindly and calmly help them out. Heckling and being straight up mean doesn’t help anyone learn. Can’t say it nicely? Don’t weigh in.</p>

      <h2>Embrace and share differences</h2>
      <p>A language can have many words, accents and ways to say the same thing. We think that’s one of the wonders of languages. Approach these conversations with an open mind and attitude.</p>

      <h2>Think before you share</h2>
      <p>We care about your safety. Online communities are inherently social, but please beware of swapping or posting any private information that could be misused. That includes your phone number, age, address, what time you’ll be at home, school name, email, or other personal information that could put your privacy at risk. Simply put: don’t over-share. Sharing and encouraging others to share personal data might get your post, and possibly your account, removed.</p>

      <h2>Do Not...</h2>
      <p><b>Please don’t use any of Dorkodu's Websites, Apps and any other Product/Services with bad and ingeniuine intentions.</b></p>

      <h3>Don't attack anyone with words or actions.</h3>
      <p>Dorkodu is a safe place for members of all backgrounds. Harassment and hurtful content will not be tolerated. Using symbols, names and text that promote hate—as well as harassing, stalking, impersonating, and making sexual remarks towards someone—are considered abuse. The same goes for nudity and disturbing profile pictures and usernames. As stated in the terms, Dorkodu reserves the right to replace images or remove these accounts at its sole discretion.</p>
      <p>Rule of thumb: if you are making someone feel attacked or hurt, then you shouldn’t be doing it. We take these reports seriously and may delete your account without previous notice if such activity is verified by our team.</p>

      <h3>Don't script or cheat maliciously.</h3>
      <p>Dorkodu believes in honest effort. If you are scripting for the purposes of cheating or sharing information and instructions about using Dorkodu in a way that may impact the system, community, sharing, learning, data or experience in a negative or significant manner, your account and posts may be removed.</p>

      <h3>Don't write inflammatory comments.</h3>
      <p>Hateful, obscene and off-topic comments don’t contribute to learning. Cursing doesn’t either (let people discover those words in the wild). Leave them out of the language discussions.</p>

      <h3>To Summarize</h3>
      <p>We do not tolerate content that is:</p>

      <ul>
        <li>Illegal</li>
        <li>Pornographic</li>
        <li>Excessively profane or violent</li>
        <li>Spam</li>
        <li>Threatening, harassing, or bullying</li>
        <li>Associated with racism or intolerance</li>
        <li>Impersonating someone in a misleading or deceptive manner</li>
        <li>Personal confidential information</li>
      </ul>

      <p>
        <b>Please don't waste your time looking for loopholes.</b> We will remove any content that violates the spirit of these guidelines and you will risk losing partial or full access to Dorkodu without warning. By following these guidelines, we will all contribute to an interesting and helpful learning community.
      </p>

    </Container>
  )
}

const CookiePolicy = () => {
  return (
    <Container size={760}>
      <Group wrap="nowrap" maw={440}>
        <Emoji emoji='🍪' size={36} />
        <Stack gap={0}>
          <Title order={1} fw={750} lh={1}>
            Cookie Policy
          </Title>
          {/* <Text span inherit variant="gradient" gradient={{ from: "#17CC38", to: "#6BD731", deg: 60 }}> Gamification</Text> */}
          <Title order={2} c="dimmed" fw={600} lh={1.2} size={18} mt={4}>
            What we do with small pieces of information we store to enhance the experience.
          </Title>
        </Stack>
      </Group>


      <p><b>Last updated:</b> March 21, 2024</p>
      <p>This Cookie Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.</p>
      <p>Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.</p>
      <p>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</p>
      <h2>Interpretation and Definitions</h2>
      <h4>Interpretation</h4>
      <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
      <h4>Definitions</h4>
      <p>For the purposes of this Cookies Policy:</p>
      <ul>
        <li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Cookies Policy) refers to Dorkodu, Istanbul, Turkey.</li>
        <li><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
        <li><strong>Website</strong> refers to Dorkodu, accessible from <a href="https://dorkodu.com" rel="external nofollow noopener" target="_blank">https://dorkodu.com</a></li>
        <li><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
      </ul>
      <h2>The use of the Cookies</h2>
      <h4>Type of Cookies We Use</h4>
      <p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
      <p>We use both session and persistent Cookies for the purposes set out below:</p>
      <ul>
        <li>
          <p><strong>Necessary / Essential Cookies</strong></p>
          <p>Type: Session Cookies</p>
          <p>Administered by: Us</p>
          <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
        </li>
        <li>
          <p><strong>Functionality Cookies</strong></p>
          <p>Type: Persistent Cookies</p>
          <p>Administered by: Us</p>
          <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
        </li>
      </ul>
      <h4>Your Choices Regarding Cookies</h4>
      <p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</p>
      <p>If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>
      <p>If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>
      <ul>
        <li>
          <p>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" rel="external nofollow noopener" target="_blank">https://support.google.com/accounts/answer/32050</a></p>
        </li>
        <li>
          <p>For the Internet Explorer web browser, please visit this page from Microsoft: <a href="http://support.microsoft.com/kb/278835" rel="external nofollow noopener" target="_blank">http://support.microsoft.com/kb/278835</a></p>
        </li>
        <li>
          <p>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" rel="external nofollow noopener" target="_blank">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></p>
        </li>
        <li>
          <p>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" rel="external nofollow noopener" target="_blank">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></p>
        </li>
      </ul>
      <p>For any other web browser, please visit your web browser's official web pages.</p>
      <h4>More Information about Cookies</h4>
      <p>You can learn more about cookies: <a href="https://www.freeprivacypolicy.com/blog/cookies/" target="_blank">Cookies: What Do They Do?</a>.</p>
      <h4>Contact Us</h4>
      <p>If you have any questions about this Cookies Policy, You can contact us:</p>
      <ul>
        <li>By email: hey@dorkodu.com</li>
      </ul>
    </Container>
  )
}
