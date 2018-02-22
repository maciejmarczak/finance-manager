package org.maciejmarczak.financemanager.user;

import org.springframework.data.jpa.repository.JpaRepository;

interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}
