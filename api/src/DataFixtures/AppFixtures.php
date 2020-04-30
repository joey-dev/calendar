<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $userPasswordEncoder;

    public function __construct(UserPasswordEncoderInterface $userPasswordEncoder)
    {
        $this->userPasswordEncoder = $userPasswordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $this->loadUsers($manager);
    }

    public function loadUsers(ObjectManager $manager)
    {
        $user = new User();
        $user->setUsername("joey");
        $user->setFirstName("joey");
        $user->setLastName("stil");
        $user->setEmail("joeystil3@gmail.com");
        $user->setPassword($this->userPasswordEncoder->encodePassword(
            $user,
            "test123"
        ));

        $manager->persist($user);
        $manager->flush();
    }
}
