
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Building2, Stethoscope, Heart, Brain } from "lucide-react";

const AdvisoryBoard = () => {
  const advisoryBoard = [
    {
      specialty: "Dental",
      members: [
        { 
          name: "Dr. Tom Gotsis, DDS", 
          practice: "Midwest Dental Sleep Medicine Institute", 
          location: "TBD",
          bio: "Dr. Tom Gotsis is a seasoned dental professional and retired U.S. Army Colonel with over 35 years of experience. A graduate of Loyola School of Dentistry, he began his career in the Army, completing a residency at Ft. Carson and serving overseas in Germany. After active duty, he built a successful private practice in St. Louis and continued to serve in the Army Reserve until 2008. Dr. Gotsis is a Fellow of the Academy of General Dentistry and an active member of the ADA, Missouri Dental Association, and Greater St. Louis Dental Society. Today, he focuses on helping patients treat Obstructive Sleep Apnea through personalized care and oral appliance therapy. He and his wife Laurie have three grown children and have called St. Louis home for over three decades.",
          image: "/lovable-uploads/a8c1c489-0de5-4e86-91a0-699d1348e3cb.png"
        }
      ],
      icon: <Stethoscope className="h-6 w-6 text-blue-600" />
    },
    {
      specialty: "Orthodontic", 
      members: [
        { 
          name: "Dr. Charlie Ries, DMD", 
          practice: "Ries Orthodontics", 
          location: "TBD",
          bio: "Dr. Charlie Ries is a skilled and compassionate orthodontist proudly serving the Ellisville and O'Fallon communities. A Ballwin native and graduate of St. Louis University High School, Dr. Ries earned a basketball scholarship to Northern Illinois University, where he studied Biology. He went on to complete his Doctor of Dental Medicine at Southern Illinois University and a General Practice Residency at St. John's Mercy Hospital before specializing in Orthodontics at the University of Nevada, Las Vegas. Known for his warm approach and personalized care, Dr. Ries is passionate about creating confident, lasting smiles while building genuine relationships with his patients. He's proud to practice in his hometown and raise his family — his wife Molly, three sons, and a daughter — in the same vibrant community. Dr. Ries is a member of the American Association of Orthodontists, American Dental Association, Missouri Dental Association, and the Greater St. Louis Dental Society.",
          image: "/lovable-uploads/b2b03705-b864-4956-afc3-36bb474c0eb8.png"
        }
      ],
      icon: <Heart className="h-6 w-6 text-red-600" />
    },
    {
      specialty: "Chiropractic",
      members: [
        { 
          name: "Dr. Lauren Hendrix, DC, MS", 
          practice: "West County Spine and Joint", 
          location: "TBD",
          bio: "Dr. Lauren specializes in women's health, prenatal care, and injury rehabilitation, with advanced certifications in Webster Technique, Graston Technique®, and female-specific training. She holds degrees in Exercise Science, Psychology, Chiropractic, and Sports Rehabilitation, and is an ultramarathon runner, equestrian, and lifelong coach.",
          image: "/lovable-uploads/718e6216-0407-4e28-b964-c455d30fdb03.png"
        },
        { 
          name: "Dr. Matt Davidson, DC", 
          practice: "West County Spine and Joint", 
          location: "TBD",
          bio: "Dr. Matt combines clinical excellence with personal experience as a competitive endurance athlete, having completed over 300 races, including Ironman triathlons and ultra-distance runs. He holds degrees from Thomas More College and Logan College of Chiropractic and is a passionate advocate for movement-based wellness at every stage of life.",
          image: "/lovable-uploads/d1c2cfaa-43c1-48a0-8361-53eca1c3b48b.png"
        }
      ],
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      description: "Husband-and-wife team Dr. Lauren Hendrix and Dr. Matt Davidson bring a shared passion for lifelong health, athletic performance, and patient-centered care to their chiropractic practice. Together, they are active members of the St. Louis athletic community, frequently coaching, racing, and supporting youth sports. When not in the clinic or on the race course, they love cheering on their three kids and helping families live stronger, healthier lives."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Advisory Board
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading practitioners across specialties who guide our product development and ensure 
            real-world applicability of our AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {advisoryBoard.map((board, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {board.icon}
                  </div>
                  <CardTitle className="text-xl">{board.specialty}</CardTitle>
                </div>
                {board.description && (
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {board.description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {board.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="flex items-start space-x-4 p-4 bg-white rounded-lg">
                      {member.image ? (
                        <Avatar className="w-20 h-20 flex-shrink-0">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-8 w-8 text-blue-600" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                        <p className="text-gray-600 text-sm">{member.practice}</p>
                        <p className="text-gray-500 text-xs">{member.location}</p>
                        {member.bio && (
                          <p className="text-gray-600 text-xs mt-2 leading-relaxed">{member.bio}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;
