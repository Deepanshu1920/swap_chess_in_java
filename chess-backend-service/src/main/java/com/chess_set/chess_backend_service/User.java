import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(updatable = false)
    private String username;

    private String email;

    private String password;

    private LocalDateTime createdDate;

    @PrePersist
    protected void onCreate() {
        createdDate = LocalDateTime.now();

        // Extract username from email
        if (email != null && email.contains("@")) {
            username = email.substring(0, email.indexOf("@"));
        }
    }

    // getters and setters
}